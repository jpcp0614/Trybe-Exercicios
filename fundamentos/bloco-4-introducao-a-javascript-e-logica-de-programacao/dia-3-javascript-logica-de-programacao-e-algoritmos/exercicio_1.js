/* Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1,
 imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

n = 5

*****
*****
*****
*****
*****

Algoritmo
1. Declarar variável n
2. Declarar variável para o número de linhas com valor zero
3. Criar um if para conferir se n <= 1
4. Se sim, trocar n
5. Se não, vai pro loop for
6. Incremento o valor da variável linha com o index, imprimindo o "*" com repetição
*/

let n = 5;
let line = "";

if (n <= 1) {
  console.log("error: type an n greater than 1");

} else {
  for (let index = 1; index <= n; index += 1) {
    line = index * console.log("*".repeat(n));
  }

}
