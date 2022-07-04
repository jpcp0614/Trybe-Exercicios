// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem:
// "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

/*
Algoritmo:
1. Adicionar o array
2. Criar uma variável com valor zero
3. Criar um loop para varrer o array
4. Montar a estrutura do loop
5. Incrementar a variavel com o valor correspondente do loop
6. Criar um if com  condição da variável ser a média maior que 20
7. Se ok, imprimir valor maior que 20
8. Se não, imprimir valor menor que 20 
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

if (sum/numbers.length > 20) {
  console.log("Valor maior que 20");

} else {
  console.log("valor menor que 20");
}