// sem arrow functions
const printName = function () {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(2, 2));

const sum2 = function(num1, num2) {
  return num1 + num2;
}
console.log(sum2(2, 2));


// arrow function
const sum3 = (num1, num2) => {
  return num1 + num2;
}
console.log(sum3(2, 2));

const sum4 = (num1, num2) => num1 + num2; //funcao com return na mesma linha
console.log(sum4(2, 2));

// 1)
// sem arrow function
function countWords(phrase) {
  return phrase.split(' ').length;
}
console.log(countWords('Fala tribo, beleza?'));

// com arrow function
const countWords2 = phrase => phrase.split(' ').length;
console.log(countWords2('Fala tribo, beleza?'));

// 2)
// sem arrow function
function objectPerson(name1, age1) {
  return {
    name: name1,
    age: age1
  }
}
console.log(objectPerson('Joaquim', 25));

// com arrow function
const objectPerson2 = (name2, age2) => ({name: name2, age: age2});
console.log(objectPerson2('Joaquim', 25));