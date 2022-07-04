// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado

/*
Algoritmo:
1. Criar um array vazio
2. Criar um loop para varrer o array
3. Montar a estrutura do loop
4. Incrementar, adicionando ao array os elementos em ordem crescente
7. Imprimir o resultado do array
*/

let numbers = [];

for (let index = 0; index < 25; index += 1) {
  numbers.push(index + 1);
}

console.log(numbers)