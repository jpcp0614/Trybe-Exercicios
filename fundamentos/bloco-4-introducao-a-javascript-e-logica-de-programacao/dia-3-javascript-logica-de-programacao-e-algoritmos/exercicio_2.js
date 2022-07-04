/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um
triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5

*
**
***
****
*****

Algoritmo
1. Declarar variável n
2. Declarar variável para o número de linhas com espaço vazio
3. Criar um if para conferir se n <= 1
4. Se sim, trocar n
5. Se não, vai pro loop for
6. Incremento o valor da variável linha coma própria linha + "*"
7. Imprimir
*/

let n = 5;
let line = "";

if (n <= 1) {
  console.log("error: type an n greater than 1");

} else {
  for (let index = 1; index <= n; index += 1) {
    line += "*";
    console.log(line);
  }

}