const fs = require('fs');
//* tanto faz require('fs') ou require('fs').promises (importa somente o submódulo)

// async function sum(a, b) {
//   return a + b
// }

// console.log(sum(2, 2));

/*
const content = fs.promises.readFile('./file1.txt', 'utf-8')

console.log(content); // no treatment
*/

//* Quando se coloca um async a frente de qualquer função,
//* ela deixa de ser um retorno direto e passa a ser uma promise

//* mais moderno
const mainAsyncAwait = async () => {
  try {
    const content = await fs.promises.readFile('./file1.txt', 'utf-8')
    // console.log(content) // se não passar o encoding utf-8, retorna o buffer
    // console.log(content.toString()) // para resolver a falta do encoding
    console.log('mainAsyncAwait -> ' + content);
  } catch (e) {
    console.log(e);
  }
  
  // fs.readFile('./file1.txt', 'utf-8', (err, response) => {
  //   console.log(response);
  // }) jeito antigo de resolver

}
mainAsyncAwait();

console.log('Executando teoricamente após a chamada da função')

//* outra maneira
fs.promises.readFile('./file1.txt', 'utf-8')
  .then(response => console.log('then catch -> ' + response))
  .catch(err => console.log(err))

//* jeito rústico
const mainCallback = () => {
  fs.readFile('./file1.txt', 'utf-8', (err, content) => {
    if (err) console.log(err)

    console.log('mainCallback -> ' + content)
  })
}
mainCallback();