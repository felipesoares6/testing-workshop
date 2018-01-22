// Things to know:
// - The `toEqual` assertion does a "deep" equality check.
//   This means you can verify that two objects are effectively
//   the same because they have the same primative values.
//   For example:
//     `expect({a: 'b'}).toEqual({a: 'b'})`
//   Learn more: https://facebook.github.io/jest/docs/expect.html#toequalvalue
//
// You're going to develop a new utility function called `arrayify`
// using Test Driven Development!
// You'll write this function in `api/src/routes/utils/arrayify.js`
//
// Requirements: accepts a single argument and returns an array
// of that argument. If the given argument is already an array,
// just return the argument. If it's given nothing, return an empty array.
//
// **Remember** to write a simple test to cover a simple use case. Then
// write code to make that test pass. Then refactor your code to clean
// it up if needed. Then continue the cycle until you cover all use cases.
import arrayify from '../arrayify'

test('when receives an empty arg return an empty array', () => {
  const argument = []
  const result = arrayify(argument)

  expect(result).toEqual([])
})

test('when receives an array return the same', () => {
  const argument = [1, 2, 3]
  const result = arrayify(argument)

  expect(result).toEqual(argument)
})

test('when receives an argument return an array', () => {
  const argument = '123'
  const result = arrayify(argument)

  expect(result).toEqual([argument])
})

