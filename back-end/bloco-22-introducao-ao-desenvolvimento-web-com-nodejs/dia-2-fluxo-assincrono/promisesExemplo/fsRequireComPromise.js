const fs = require('fs');

function readFilePromise (fileName) { //Recebemos, por parâmetro, o nome do arquivo que queremos ler (fileName)
  return new Promise((resolve, reject) => { // Criamos e retornamos uma nova Promise

    fs.readFile(fileName), (err, content) => { // Chamamos o módulo nativo do node (fs) para realizar a leitura do arquivo
      if (err) return reject(err) // Dentro da callback verificamos se ocorreu um erro
      resolve(content) // Caso não, resolvemos a Promise com o resultado da leitura do arquivo
    }
  })
}

readFilePromise('file1.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso arquivo 1 seja lido,
    console.log(`Lido file1.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
    return readFilePromise('file2.txt'); // Chamo novamente a função, que me retorna uma nova Promise
  })
  .then(content => { // Caso a Promise retornada pelo `then` anterior seja resolvida,
    console.log(`Lido file2.txt com ${content.byteLength} bytes`); // Escrevemos o resultado no console
    return readFilePromise('file3.txt'); // E chamamos a função novamente, recebendo uma nova promessa
  })
  .then((content) => { // Caso a promessa de leitura do `file3.txt` seja resolvida,
    console.log(`Lido file3.txt com ${content.byteLength} bytes`); // Logamos o resultado no console
  })
  .catch((err) => { // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
    console.log(`Erro ao ler arquivos: ${err.message}`); // Escrevemos o resultado no console
  });