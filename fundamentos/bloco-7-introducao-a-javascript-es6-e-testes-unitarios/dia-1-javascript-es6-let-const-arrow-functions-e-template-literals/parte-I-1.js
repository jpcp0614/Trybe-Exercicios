// usando var
// function myAge() {
//   for (var age = 33; age <= 100; age += 2) {
//     console.log('dentro do for ', age);
//   }
//   console.log('fora do for ', age); // vazou o escopo

//   if (true) {
//     var name = 'Trybe';
//   }
//   console.log('fora do if ', name);

// }
// myAge();

// usando let - não vaza do escopo
// function myAge() {
//   for (let age = 33; age <= 100; age += 2) {
//     console.log('dentro do for ', age);
//   }

//   if (true) {
//     let name = 'Trybe';
//     console.log('fora do if ', name);
//   }
  
// }
// myAge();

// usando const
// function myAge() {
//   for (const age = 33; age <= 100; age += 2) { // é constante
//     console.log('dentro do for ', age);
//   }
// }
// myAge();

const student = {
  name: 'Maria',
  age: 23
}

student.age = 25;

console.log(student);

// Quando usar:
// let: quando for reatribuir variáveis
// const: sempre utilize
// var: vaaai embora