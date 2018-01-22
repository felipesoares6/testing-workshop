import getTokenFromHeader from '../get-token-from-header'

test('getTokenFromHeader returns null if there is no token header', () => {
  const req = {headers: {}}
  const result = getTokenFromHeader(req)

  expect(result).toBeNull()
})

test('getTokenFromHeader returns the token when provided', () => {
  const token = 'blabla'
  const req = {headers: {authorization: `Token ${token}`}}
  const result = getTokenFromHeader(req)

  expect(result).toBe(token)
})


test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
