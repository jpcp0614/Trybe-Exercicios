// if (true) {
//   // inicio do escopo do if
//   var userAge = "20";
//   console.log(userAge); // 20
//   // fim do escopo do if
// }
// console.log(userAge); // 20

// if (true) {
//   // inicio do escopo do if
//   let userAge = "20";
//   console.log(userAge); // 20
//   // fim do escopo do if
// }
// console.log(userAge); // error

// if (true) {
//   // inicio do escopo do if
//   const userAge = "20";
//   console.log(userAge); // 20
//   // fim do escopo do if
// }
// console.log(userAge); // error

// var userName = "Isabella";
// var userName = "Lucas";
// console.log(userName); // Lucas

// let userName = "Isabella";
// let userName = "Lucas";
// console.log(userName); // error

const userInfo = {
  name: "Cláudio",
  id: "5489-2",
  email: "claudio@email.com"
};
userInfo.name = "João"

console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro
