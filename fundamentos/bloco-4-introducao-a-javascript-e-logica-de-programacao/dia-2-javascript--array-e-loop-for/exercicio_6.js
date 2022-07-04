// Descubra quantos valores ímpares existem no array e imprima o resultado.
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

/*
Algoritmo:
1. Adicionar o array
2. Criar uma variável com valor zero
3. Criar um loop para varrer o array
4. Montar a estrutura do loop
5. Criar um if para verificar cada elemento do array (impar)
6. Atualizar a contagem da variável
7. Criar outro if para verificar a variavel atualizada
8. Se ok, imprimir nenhum valor impar encontrado
9. Se não, imprimir total de valores impares
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contadorImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 == 1) {
    contadorImpar += 1;
}
}

if (contadorImpar === 0) {
  console.log("Nenhum valor ímpar encontrado");

} else {
  console.log("Total de valores ímpares no array: " + contadorImpar);
}



