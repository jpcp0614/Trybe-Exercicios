// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array
// - média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos

/*
Algoritmo:
1. Adicionar o array
2. Criar uma variável com valor zero
3. Criar um loop para varrer o array
4. Montar a estrutura do loop
5. Incrementar a variavel com o valor correspondente do loop
6. Imprimir o resultado com a média aritmética inclusa
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

console.log("A média é " + sum/numbers.length);