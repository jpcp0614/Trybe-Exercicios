// * Ex.1
const cars = ['Gol', 'HB20', 'Focus'];
const motors = ['Biz', 'R1'];

const transport = [...cars, ...motors];

console.log(transport); // ['Gol', 'HB20', 'Focus', 'Biz', 'R1']


// * Ex.2
const trybesKnowledge = {
  softSkills: true,
  hardSkills: true,
  work: true
}

const person = {
  name: 'Nádia',
  age: '28',
  city: 'Belo Horizonte'
}

const trybePerson = {
  ...person,
  ...trybesKnowledge
}
console.log(trybePerson);
/**{
  name: 'Nádia',
  age: '28',
  city: 'Belo Horizonte',
  softSkills: true,
  hardSkills: true,
  work: true
}
*/