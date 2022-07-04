// Exercício 6
const readlineSync = require('readline-sync');

const averageVelocity = () => {
  const distance = readlineSync.questionFloat('Digite a distância percorrida pelo carro, em metros: ');
  const time = readlineSync.questionFloat('Digite o tempo, em horas: ');

  const average = ((distance*0.001)/ (time)).toFixed(2);

  console.log(`A velocidade média é ${average}km/h`)
}

averageVelocity();