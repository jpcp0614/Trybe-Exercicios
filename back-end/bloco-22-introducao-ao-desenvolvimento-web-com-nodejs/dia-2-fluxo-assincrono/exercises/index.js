const sumNumbers = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number'
      || typeof num2 !== 'number'
      || typeof num2 !== 'number')
      reject('Informe apenas números')

    const multiplyNumbers = (num1 + num2) * num3

    if (multiplyNumbers < 50) {
      reject('Valor muito baixo')
    } else if (multiplyNumbers > 50) {
      resolve(console.log(multiplyNumbers))
    }
  }) 
}

const getRandomNumbers = () => {
  return Math.floor(Math.random() * 101)
}

const arrayOfNumbers = async () => {
  const array = Array.from({ length: 3}).map(Function.call, getRandomNumbers);
  console.log(...array)
  try {
    return await sumNumbers(...array)
    // console.log(result);
  } catch(e) {
    console.err('Não foi possível somar', e)
  }
}
arrayOfNumbers()

//* Ref.: https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n