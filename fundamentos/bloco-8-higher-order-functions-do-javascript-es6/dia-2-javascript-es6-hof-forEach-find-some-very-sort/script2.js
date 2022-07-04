const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}

console.log(firstMultipleOf5);
// 50

const numbers2 = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultiple5 = numbers2.find((number) => number % 5 === 0);

console.log(firstMultiple5);
// 50