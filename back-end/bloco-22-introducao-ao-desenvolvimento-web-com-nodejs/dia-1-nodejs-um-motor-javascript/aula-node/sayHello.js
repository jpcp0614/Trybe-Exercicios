var readlineSync = require('readline-sync');

const sayHello = () => {
  const name = readlineSync.question('Digite seu nome: ');

  console.log(`Olá, ${name}`);
};

module.exports = sayHello;