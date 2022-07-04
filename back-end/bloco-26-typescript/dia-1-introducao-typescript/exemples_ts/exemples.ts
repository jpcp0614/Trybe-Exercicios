// criando as variáveis "yes" e "no", do tipo boolean
let yes: boolean = true; 
let no: boolean = false;

// criar uma variável "x", do tipo number, sem definir valor
// não funciona para constantes
let x: number;
let y: number = 120.5; // variável "y" definindo valor (float)

// criar uma variável "s", do tipo string (unicode UTF-16)
let s: string;
let empty: string = ''; // variável "empty" vazia
let abc: string = 'abc'; // variável "abc" definindo o valor 'abc'

// criar um void, que indica a ausência de um valor, como em uma função sem valor retornado
function sayHelloWorld(): void {
  console.log('Hello World!');
};

// criar o null e undefined, que são subtipos de todos os tipos anteriores
let nullValue = null;
let undefinedValue = undefined;

// INFERÊNCIA DE TIPO
// não explicitar qual o tipo, de modo direto. Declarar a variável e o compilador irá fazer
// a inferência do tipo através do valor declarado na variável
let flag = true;
const numberPi = 3.1416;
let message = 'Hello World!';

// Rodei -> npx tsc exemples.ts <- para compilar e gerar o arquivo exemples.js