// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

/*
Algoritmo:
1. Criar um array vazio
2. Criar um loop para varrer o array
4. Montar a estrutura do loop
5. Incrementar, adicionando os elementos no array com o index+1
6. Criar mais um loop
7. Montar a estrutura do novo loop
8. Incrementar, imprimindo o array formado, com cada elemento sendo dividido por 2
*/

let numbers = [];

for (let index = 0; index < 25; index += 1) {
  numbers.push(index + 1);
}

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]/2);
}