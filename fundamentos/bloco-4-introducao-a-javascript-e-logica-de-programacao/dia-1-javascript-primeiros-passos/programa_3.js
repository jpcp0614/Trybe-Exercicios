//Faça um programa que retorne o maior de três números.
//Defina no começo do programa três variáveis com os valores que serão comparados.

let A = -34;
let B = -34;
let C = -34;

if (B > A && B > C ) {
  console.log("O maior é o B = " + B);

} else if (A == B && B > C ) {
  console.log("O maior é A ou B = " + A);

} else if (A == C && A > B) {
  console.log("O maior é A ou C = " + A);

} else if (B == C && C > A) {
  console.log("O maior é o B ou C = " + B);

} else if (A == B && B == C) {
  console.log ("Todos os números são iguais = " + A);

} else if (C > A && C > B) {
  console.log("O maior é o C = " + C);

} else {
  console.log("O maior é o A = " + A);
}