// * Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const addEvenNumbers = (numberValue, number) => number % 2 === 0 ? numberValue + number : numberValue;

const sumEvenNumbers = (arrayOfEvenNumber) => arrayOfEvenNumber.reduce(addEvenNumbers, 2);
console.log(sumEvenNumbers(numbers));