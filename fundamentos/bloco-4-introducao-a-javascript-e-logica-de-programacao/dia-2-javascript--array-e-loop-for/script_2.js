let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe'); // adiciona mais um item no final do array do array
tasksList.unshift("Tomar banho");  // adiciona mais um item no início do array do array
tasksList.pop();  // remove o último item
tasksList.shift(); // remove o primeiro item


console.log(tasksList);
console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);
// 1


