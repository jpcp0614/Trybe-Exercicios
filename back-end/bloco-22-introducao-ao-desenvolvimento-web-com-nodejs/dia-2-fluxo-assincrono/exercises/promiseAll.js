const fs = require('fs');
const encoding = 'utf-8'

//* Exercício 5.1 e 5.2
async function createFiles () {
  const arrayOfStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const files = arrayOfStrings.map((string, index) => {
    fs.promises.writeFile(`./file${index + 1}.txt`, string);
  });
  
  // for (let i = 1; i <= 5; i++) {
  //   await fs.promises
  //     .readFile(`./file${i}.txt`, encoding)
  //     .then(content => console.log(content));
  // }
    
  //* Exercício 5.3
  await Promise.all(files);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ]

  const fileContents = await Promise.all(
    fileNames.map(f => fs.promises.readFile(f, encoding))
  );

  const joinFiles = fileContents.join(' ');
    fs.promises.writeFile('./fileAll.txt', joinFiles);
    console.log(joinFiles);
  }
createFiles();
