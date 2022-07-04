// Exercício 7
const readlineSync = require('readline-sync');

const questions = (number, response) => {
  
  if (number !== response) {
    return console.log(`Opa, não foi dessa vez. O número era ${number}`);
  }
  return console.log(`Parabéns, número correto!`);
  
}

const runGame = () => {
  const enterANumber = readlineSync.question('Digite um número entre 0 e 10: ');
  const randomNumber = Math.floor(Math.random() * 11);

  questions(enterANumber, randomNumber);

  const runGameAgain = readlineSync.question('Deseja jogar novamente? Digite s para Sim ou n para Não: ');

  if (runGameAgain !== 's') {
    return console.log(`Até a próxima uma vez!!!`)
  }
  runGame();
}

runGame();

// ref.: https://www.w3schools.com/js/js_random.asp