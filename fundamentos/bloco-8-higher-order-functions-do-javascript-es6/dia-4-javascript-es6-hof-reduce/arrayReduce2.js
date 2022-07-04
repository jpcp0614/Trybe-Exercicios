const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => accumulator + number;
const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15