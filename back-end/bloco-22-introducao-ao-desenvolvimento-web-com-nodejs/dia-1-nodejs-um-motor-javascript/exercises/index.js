const readlineSync = require('readline-sync'),
scripts = ['imc', 'velocidade', 'sorteio', 'fatorial', 'fibonacci'],
index = readlineSync.keyInSelect(scripts, 'Qual opção você deseja? ');

const result = scripts[index];

if (result) return require(`./${result}`);

// Parceria com o Valdênio

/*
const readlineSync = require('readline-sync');

const scripts = [
  { name: 'Índice de Massa Corpórea', script: './imc.js' },
  { name: 'Velocidade Média', script: './velocidade.js' },
  { name: 'Número da Sorte', script: './sorteio.js' }
];

const optionsScripts = scripts.map((script, index) => `${index + 1}: ${script.name}`);

console.log(optionsScripts)
const enterNumberToScript = readlineSync.questionInt('\nEscolha uma opção (1, 2 ou 3): ') - 1;

console.log(`\nVocê escolheu: ${scripts[enterNumberToScript].name}\n`)

const result = scripts[enterNumberToScript];

require(result.script);
*/