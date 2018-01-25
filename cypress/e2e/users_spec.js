import {sel, getRandomUserData, createNewUser} from '../utils'
describe('Users', () => {
  it('should allow a new user to sing up and log out', () => {
    const {username, email, password} = getRandomUserData()

    cy.visitApp()
      .get(sel('sign-up-link'))
      .click()
      .get(`form ${sel('username')}`)
      .type(username)
      .get(`form ${sel('email')}`)
      .type(email)
      .get(`form ${sel('password')}`)
      .type(password)
      .get('form')
      .submit()

    verifyLoggedIn(username)

    cy.get(sel('settings')).click().get(sel('logout')).click()
    cy.window().its('localStorage').invoke('getItem', 'jwt').should('be.null')
    cy.get(sel('profile-link')).should('not.exist')
  })

  it('should allow an existing user to login', () => {
    createNewUser().then(({user: {email, username, password}}) => {
      cy.visitApp()
        .get(sel('sign-in-link'))
        .click()
        .get(sel('email'))
        .type(email)
        .get(sel('password'))
        .type(password)
        .get('form')
        .submit()

      verifyLoggedIn(username)
    })
  })
})

// I'll just give you this function :)
// eslint-disable-next-line no-unused-vars
function verifyLoggedIn(username) {
  const hash = Cypress.env('E2E_DEV') ? '#/' : '/'
  cy
    .window()
    .its('localStorage')
    .invoke('getItem', 'jwt')
    .should('not.be.null')
  return cy
    .get(sel('profile-link'))
    .should('contain.text', username)
    .and('have.attr', 'href', `${hash}@${username}`)
}
