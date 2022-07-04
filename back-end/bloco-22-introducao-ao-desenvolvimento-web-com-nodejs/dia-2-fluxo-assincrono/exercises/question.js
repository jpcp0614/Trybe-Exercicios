const readline = require('readline');
const fs = require('fs');

//* Exercício 6
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function questionReadFile () {
  await rl.question('Qual arquivo deseja ler? ', (answer) => {
    rl.close();
    fs.promises.readFile(`./${answer}.txt`, 'utf-8')
      .then(response => console.log(response))
      .catch(err => console.log('Arquivo inexistente: ', err));
  })
}
questionReadFile();

// ref.: https://nodejs.org/api/readline.html#readlinecreateinterfaceoptions