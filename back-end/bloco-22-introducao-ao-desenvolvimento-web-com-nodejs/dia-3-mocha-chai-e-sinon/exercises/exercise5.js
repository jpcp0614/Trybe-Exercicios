const fs = require('fs');

function writeContent (fileName, content) {
  fs.writeFileSync(`./${fileName}.txt`, content)
  return 'ok'
}
writeContent('teste', 'Exercício 5!! \o/');

module.exports = { writeContent };