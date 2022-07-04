// const { soma, subtrai } = require('./calculadora');

// console.log(soma(10, 50));

// console.log(subtrai(10, 50));

// const sayHello = require('./sayHello');

// sayHello();

const {
  readName,
  readWeight,
  readHeight } = require('./questions');
const imc = require('./imc');
const fs = require('fs'); // já é nativo do Node⁡

const main = async () => {

  const name = readName();
  const weight = readWeight();
  const height = readHeight();
  const imcValue = imc(weight, height).toFixed(2);
  const message = `\nNome: ${name}, Peso: ${weight}kg, Altura: ${height}m, IMC: ${imcValue}kg.m²`;
  console.log(message);

  await fs.promises.appendFile('imc.txt', message);

};

main();