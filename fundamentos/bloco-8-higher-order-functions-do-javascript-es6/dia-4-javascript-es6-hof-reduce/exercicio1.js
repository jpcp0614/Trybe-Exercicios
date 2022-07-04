// * Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// ref1.: https://pt.stackoverflow.com/questions/318038/como-transformar-um-array-de-arrays-em-um-%C3%BAnico-array-em-javascript

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((accumulator, elementOfArray) => accumulator.concat(elementOfArray)); // ref1
}
console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);