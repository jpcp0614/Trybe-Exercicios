const fs = require('fs');

const file = './arquivo.txt';
const encoding = 'utf-8';

function leArquivo () {
  try {
    const fileContent = fs.readFileSync(file, encoding);
    return fileContent;
  } catch (error) {
    return null;
  }
}



module.exports = leArquivo;
