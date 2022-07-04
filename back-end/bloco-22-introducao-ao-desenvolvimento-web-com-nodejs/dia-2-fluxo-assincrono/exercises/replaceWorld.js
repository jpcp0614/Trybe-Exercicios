const readline = require('readline');
const fs = require('fs');
const encoding = 'utf-8';

//* Exercício 7
function rlQuestion(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function replaceWorld () {
  const fileName = await rlQuestion('Digite o nome do arquivo que deseja ler, sem a extensão: ');

  const chosenFile = await fs.promises.readFile(`./${fileName}.txt`, encoding)
  .catch(err => {
    console.log('Arquivo não encontrado:\n', err);
    return false;
  });
  if(!chosenFile) return;
  
  console.log(`Conteúdo do arquivo ${fileName}.txt: ${chosenFile}`);
  
  const oldWorld = await rlQuestion('\nQual palavra deseja substituir? ');
  const newWorld = await rlQuestion('\nQual palavra ou frase você deseja colocar (pode usar espaço)? ')
  console.log(`\nSubstituição: ${oldWorld} -> ${newWorld}`);

  const resultWorld = chosenFile.replace(new RegExp(oldWorld, 'g'), newWorld);
  
  const destination = await rlQuestion('Onde deseja salvar o arquivo (digite com a extensão)? ');
  await fs.promises.writeFile(destination, resultWorld);
}
replaceWorld();

//ref.: https://stackoverflow.com/questions/1162529/javascript-replace-regex