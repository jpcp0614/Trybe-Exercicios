/* Crie um objeto player contendo as variáveis listadas abaixo

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

*/

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: ["golden", "silver"],
  numberMedals: [2, 3],
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos");
console.log("Ela já ganhou " + player.numberMedals[0] + " medalhas de " + player.medals[0] + ".");
console.log("E ganhou também " + player.numberMedals[1] + " medalhas de " + player.medals[1] + ".");
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes");
