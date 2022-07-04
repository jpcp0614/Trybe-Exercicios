const readlineSync = require('readline-sync');

const readName = () => {
  const name = readlineSync.question('Digite seu nome: ');

  return name;
};

const readWeight = () => {
  const weight = readlineSync.questionFloat('Digite seu peso: ');

  return weight;
};

const readHeight = () => {
  const height = readlineSync.questionFloat('Digite sua altura: ');

  return height;
};

module.exports = {
  readName,
  readWeight,
  readHeight
};