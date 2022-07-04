// criando as variáveis "yes" e "no", do tipo boolean
var resultYes = true;
var resultNo = false;
// criar uma variável "x", do tipo number, sem definir valor
// não funciona para constantes
var resultX;
var resultY = 120.5; // variável "y" definindo valor (float)
// criar uma variável "s", do tipo string (unicode UTF-16)
var resultS;
var resultEmpty = ''; // variável "empty" vazia
var resultAbc = 'abc'; // variável "abc" definindo o valor 'abc'
// criar um void, que indica a ausência de um valor, como em uma função sem valor retornado
function resultSayHelloWorld() {
    console.log('Hello World!');
}
;
// criar o null e undefined, que são subtipos de todos os tipos anteriores
var resultNullValue = null;
var resultUndefinedValue = undefined;
// INFERÊNCIA DE TIPO
// não explicitar qual o tipo, de modo direto. Declarar a variável e o compilador irá fazer
// a inferência do tipo através do valor declarado na variável
var resultFlag = true;
var resultNumberPi = 3.1416;
var resultMessage = 'Hello World!';
// Rodei -> npx tsc exemples.ts <- para compilar e gerar o arquivo exemples.js

// acrescentei result para remover duplicidade de código em relação ao arquivo .ts
