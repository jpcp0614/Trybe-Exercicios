const numbers = [1, 2, 3, 4, -5];

// * NOTE: usando map
const negativeNumbers1 = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers1); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// * NOTE: usando o for
const negativeNumbers2 = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 0) {
    negativeNumbers2.push(numbers[index] * -1);
  } else {
    negativeNumbers2.push(numbers[index]);
  }
}

console.log(negativeNumbers2); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]