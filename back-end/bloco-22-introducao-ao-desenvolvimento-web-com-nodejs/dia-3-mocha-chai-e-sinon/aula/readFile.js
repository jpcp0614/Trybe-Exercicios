const fs = require('fs');

const fileName = './file1.txt'

//* 1. Function
async function readFile1 (fileName) {
  try {
    const contentFile = await fs.promises.readFile(fileName, 'utf-8');
    console.log(contentFile);
    return contentFile;
  } catch(error) {
    return null;
  }

}
readFile1(fileName)


//* 2. Function
// async function readFile1 (fileName) {
//   const content = await fs.promises.readFile(fileName, 'utf-8')
//     .catch((_error) => { return null })
//     return content
// }
// readFile1(fileName)


//* 3. Function
// function readFile1 (fileName) {
//   return fs.promises.readFile(fileName, 'utf-8')
//     .then((content) => { return content })
//     .catch((_error) => { return null });
// }
// readFile1(fileName)


//module.exports = { readFile1 };

//* verificação de async await
// function main() {
//   console.log('mensagem 1');

//   fs.promises.readFile(fileName, 'utf-8').then((content => console.log(content)));
  
//   console.log('mensagem 2')

//   console.log('mensagem 3')
// }
// main();