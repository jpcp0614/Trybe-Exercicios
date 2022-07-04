const readlineSync = require('readline-sync');

const fatorial = (number) => {
  return [0, 1].includes(number) ? 1 : number * fatorial(number - 1);
}

const enterNumberFatorial = () => {
  const number = readlineSync.questionInt('Digite um número inteiro positivo: ');

  if (number < 0) {
    console.log('Digite um número maior ou igual a zero')
    return;
  }

  const result = fatorial(number);

  console.log(`${number}! = ${result}`)
}

enterNumberFatorial();