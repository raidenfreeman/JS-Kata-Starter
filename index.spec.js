const sum = require('./index');


// Your task
//
//
//
// Write a program that prints one line for each number from 1 to 100
// For multiples of three print Fizz instead of the number
// For the multiples of five print Buzz instead of the number
// For numbers which are multiples of both three and five print FizzBuzz instead of the number

function someFunction() {
  const array = [];
  for (let i = 1; i <= 100; i++) {
    let value = "";
    value += (i % 3 === 0 || i === 13) ? "Fizz" : "";
    value += (i % 5 === 0) ? "Buzz" : "";
    value += (i % 7 === 0) ? "Bang" : "";
    array.push(value || i);
  }
  return array;
}

test('output 1', () => {
  expect(someFunction()[0]).toEqual(1)
})
test('output 2', () => {
  expect(someFunction()[1]).toEqual(2)
})
test('output Fizz for 3', () => {
  expect(someFunction()[2]).toEqual("Fizz")
})
test('output Fizz for 6', () => {
  expect(someFunction()[5]).toEqual("Fizz")
})
test('output Buzz for 5', () => {
  expect(someFunction()[4]).toEqual("Buzz")
})
test('output FizzBuzz for 15', () => {
  expect(someFunction()[14]).toEqual("FizzBuzz")
})
test('output FizzBuzz for 30', () => {
  expect(someFunction()[29]).toEqual("FizzBuzz")
})
test('output Bang for 7', () => {
  expect(someFunction()[6]).toEqual("Bang")
})
test('output FizzBang for 21', () => {
  expect(someFunction()[20]).toEqual("FizzBang")
})
test('output BuzzBang for 35', () => {
  expect(someFunction()[34]).toEqual("BuzzBang")
})
test('output Fizz for 13', () => {
  expect(someFunction()[12]).toEqual("Fizz")
})


