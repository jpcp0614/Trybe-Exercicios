/* Agora inverta o lado do triângulo. Por exemplo:

n = 5

    *
   **
  ***
 ****
*****

*/


let n = 8;
let line = "X";
let asterisk = "*"
let pyramid;


if (n <= 1) {
  console.log("error: type an n greater than 1");

} else {
  for (let index = 1; index <= n; index += 1) {
    pyramid = line.repeat(n-index) + asterisk.repeat(index);
    console.log(pyramid);
  }
}









/*
let n = 5;

for (let i = 0; i < n; i += 1) {
  let linha = "";
  const tamanho = n - i;

  for (let spaces = 0; spaces < tamanho; spaces += 1) {
    linha += " ";
  }

  for (let asterisk = n; asterisk >= tamanho; asterisk -+ 1) {
    linha += '*'
  }
}

console.log(linha);
*/
