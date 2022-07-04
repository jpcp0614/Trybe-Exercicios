// * Usando o for
/*
Usando for :
- Necessidade de criar uma variável para acumular o resultado de cada iteração do for , a soma de cada resultado - let sumNumbers 
- Necessidade de setar um valor inicial para variável - sumNumbers = 0;
*/

const numbers1 = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers1.length; index += 1) {
  sumNumbers += numbers1[index];
}
console.log(sumNumbers); // 113


// * Usando o .reduce
/*
A função passada por parâmetro recebe dois parâmetros, o acumulador `result` e o elemento do array de cada iteração, `number`;
Como a função é uma arrow function que possui apenas uma linha, o retorno de cada iteração será: result + number;
O retorno é salvo no primeiro parâmetro, result.
É como se você estivesse fazendo igual à primeira função, sumNumbers = sumNumbers + numbers[index], mas nesse caso seria result = result + number;
*/
const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers2.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador.
console.log(sumNumbers); // 113                                             Ele recebe, do `reduce`, o retorno da função a cada iteração.

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers2.reduce(getSum);
console.log(sumNumbers); // 113