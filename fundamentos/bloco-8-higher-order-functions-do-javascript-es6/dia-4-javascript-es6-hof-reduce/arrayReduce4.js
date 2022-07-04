const numbers = [50, 85, 30, 3, 15];

const higherNumber = (bigger, number) => (bigger > number) ? bigger : number;
const bigger = numbers.reduce(higherNumber, 0);
console.log(bigger);