//* Exercício 8

async function fizzBuzz (number) {
  return new Promise((resolve, reject) => {

    if (number % 15 === 0) { 
      resolve(console.log('FizzBuzz'))
    } else if (number % 3 === 0) {
      resolve(console.log('Fizz'))
    } else if (number % 5 === 0) {
      resolve(console.log('Buzz'))
    }
    reject(number)
  })
}

fizzBuzz(18);