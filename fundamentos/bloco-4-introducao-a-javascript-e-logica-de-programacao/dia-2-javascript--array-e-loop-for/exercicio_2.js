// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado

/*
Algoritmo:
1. Adicionar o array
2. Criar uma variável com valor zero
3. Criar um loop para varrer o array
4. Montar a estrutura do loop
5. Incrementar a variavel com o valor correspondente do loop
6. Imprimir o resultado
*/


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

console.log("O valor da soma é " + sum);