const readlineSync = require('readline-sync');


const number = readlineSync.questionInt('Digite um número inteiro positivo: ')

const fibonacci = (number) => {
  let n1 = 1;
  let n2 = 1;
  let nextTerm;

  if (number <= 0) {
    console.log('Digite um número maior que zero!')
    return;
  }

  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }  
}

fibonacci(number);
