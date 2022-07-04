// Utilizando for, descubra qual o menor valor contido no array e imprima-o

/*
Algoritmo:
1. Adicionar o array
2. Criar uma variável com a primeira posição do array
3. Criar um loop para varrer o array
4. Montar a estrutura do loop
5. Criar um if com a condição da variavel ser maior que o valor da primeira posição no array
6. Se ok, incrementar a variável com o valor da posição ho array
7. Imprimir o resultado da variavel
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
menorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}

console.log(menorValor);