// Exercício 1⁡
// const imcFunction = () => {
//   const w = 80;
//   const h = 1.75;

//   const imc = (w/(h**2)).toFixed(2);

//   console.log(`| Peso: ${w} | Altura: ${h} | IMC = ${imc}kg.m² |`);
// }

// imcFunction();⁡


// Exercício 3
const readlineSync = require('readline-sync');

const imcFunction = () => {
  const weight = readlineSync.questionFloat('Qual seu peso, em kg? ');
  const height = readlineSync.questionFloat('Qual sua altura, em metros? ');

  const imc = (weight/(height**2)).toFixed(2);

  console.log(`| Peso: ${weight}kg | Altura: ${height}m | IMC = ${imc}kg.m² |`);

  imcClassification(imc);
};

const imcClassification = (imc) => {
  const options = [
    imc < 18.5,
    imc >= 18.8 && imc <= 24.9,
    imc >= 25 && imc <= 29.9,
    imc >= 30 && imc <= 34.9,
    imc >= 35 && imc <= 39.9,
    imc >= 40];

    switch (options.indexOf(true)) {
      case 0:
        console.log('Abaixo do peso (magreza)')
        break
      case 1:
        console.log('Peso normal')
        break
      case 2:
        console.log('Acima do peso (sobrepeso)')
        break
      case 3:
        console.log('Obesidade grau I')
        break
      case 4:
        console.log('Obesidade grau II');
        break
      case 5:
        console.log('Obesidade grau III')
        break
    };
};

imcFunction();

// ref.: https://pt.stackoverflow.com/questions/9781/substituir-o-if-else-por-case-javascript