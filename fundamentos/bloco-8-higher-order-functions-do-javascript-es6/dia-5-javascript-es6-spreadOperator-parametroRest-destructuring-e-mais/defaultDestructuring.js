// * Ex.1 sem defaultDestructuring
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality } = person;

// * Ex.1 com defaultDestructuring
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian


// * Ex.2
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0