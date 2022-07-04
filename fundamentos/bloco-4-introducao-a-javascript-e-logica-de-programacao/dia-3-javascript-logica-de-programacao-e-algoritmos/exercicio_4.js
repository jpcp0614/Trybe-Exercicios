/* Depois, faça uma pirâmide com n asteriscos de base:


n = 5

  *
 ***
*****

*/


let baseWidth = 5;

for (let countLine = 1; countLine <= baseWidth; countLine += 1) {
  linha = "";

  for (let countColumn = 1; countColumn <= (2*baseWidth - 1); countColumn += 1) {

    if (countColumn >= baseWidth + 1 - countLine && countColumn <= baseWidth - 1 + countLine) {
      linha += "*";
    } else {
      linha += " ";
    }
  }
    console.log(linha);
}
