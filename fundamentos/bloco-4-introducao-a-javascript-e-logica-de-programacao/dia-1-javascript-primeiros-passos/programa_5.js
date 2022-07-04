/*Faça um programa que defina três variáveis com os valores dos três ângulos internos
de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo
e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma
mensagem de erro.

- Para os ângulos serem de um triângulo válido,
  a soma dos três devem ser 180° (na geometria Euclidiana),
  do contrário, a soma pode ser 270°.

- Um ângulo será considerado inválido se não tiver um valor positivo.*/


let alfa = 50;
let beta = 40;
let teta = 90;

if (alfa <= 0 || beta <= 0 || teta <= 0) {
  console.log("error");

} else if (alfa + beta + teta == 180) {
  console.log(true);

} else {
  console.log(false);
}