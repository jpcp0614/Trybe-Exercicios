import readline from 'readline-sync';
const base: number = 10;

function errorUnity(unity: string): string {
  throw new Error(`A unidade ${unity} não é válida`);
}

function convert(
  identity: number,
  units: string[],
  valor: number,
  unityInput: string,
  unityOutput: string): string {

  if(!units.includes(unityInput)) errorUnity(unityInput);
  if(!units.includes(unityOutput)) errorUnity(unityOutput);

  const indexInput = units.indexOf(unityInput);
  const indexOutput = units.indexOf(unityOutput);

  const exp = (indexOutput - indexInput) * identity;
  const convertCalc = valor * Math.pow(base, exp);
  const scientificNot = convertCalc.toExponential(2);
  
  return scientificNot;
}

function exec(identity: number, units: string[]): void {

  const valor = readline.questionFloat('Digite o valor a ser convertido: \n');

  const unityInput = readline.keyInSelect(units, 'Selecione a unidade de entrada: \n', { cancel: 'SAIR' });
  if(unityInput === -1) return console.log('Good bye!!!');

  const unityOutput = readline.keyInSelect(units, 'Selecione a unidade de saída: \n', { cancel: 'SAIR' });
  if(unityOutput === -1) return console.log('Good bye!!!');

  const itemInput = units[unityInput];
  const itemOutput = units[unityOutput];

  const result = convert(identity, units, valor, itemInput, itemOutput);

  const message = `${valor}${itemInput} é igual a ${result}${itemOutput}`;
  console.log(message);
}

export default {
  exec,
}