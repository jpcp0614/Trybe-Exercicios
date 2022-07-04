const fs = require('fs');

const fileSimpsons = './simpsons.json';
const fileSimpsonFamily = './simpsonsFamily.json';
const encoding = 'utf-8';

//* Exercício 4.1
// fs.promises.readFile(fileSimpsons, encoding)
//   .then(data => {
//     const json = JSON.parse(data);
//     return json.map(({ id, name }) => console.log(`${id} - ${name}`));
//   })
//   .catch(err => {
//     console.error(`Não foi possível ler o arquivo simpsons.json\n Error: ${err}\n`);
//     process.exit(1);
//   });


//* Exercício 4.2
// const getSimpsonById = (idNumber) => {
//   fs.promises
//     .readFile(fileSimpsons, encoding)
//     .then(content => {
//       const json = JSON.parse(content);
//       const filterJson = json.find(({ id }) => id === idNumber.toString());
//       if (!filterJson) {
//         throw new Error('id não encontrado');
//       }
//       const characterName = Object.values(filterJson);
//       return console.log('\nPersonagem: ', characterName[1], '\n');
//     })    
// }
// getSimpsonById(7);


//* Exercício 4.3
// async function deleteSimpsonById () {
//   const simpsons = await fs.promises
//     .readFile(fileSimpsons, encoding)
//     .then(content => JSON.parse(content));

//   const filterSimpsons = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');
//   await fs.promises.writeFile(fileSimpsons, JSON.stringify(filterSimpsons));
// }
// deleteSimpsonById();


//* Exercício 4.4
// async function insertIdSimpsons () {
//   const simpsons = await fs.promises
//     .readFile(fileSimpsons, encoding)
//     .then(content => JSON.parse(content));
  
//   const insertSimpsonsInList = simpsons.filter(simpson => ['1', '2', '3', '4'].includes(simpson.id));
//   //console.log(insertSimpsonsInList);
//   await fs.promises.writeFile(fileSimpsonFamily, JSON.stringify(insertSimpsonsInList));
// }
// insertIdSimpsons();
//ref.: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


//* Exercício 4.5
// async function insertNameSimpsons () {
//   const simpsonsFamily = await fs.promises
//     .readFile(fileSimpsonFamily, encoding)
//     .then(content => JSON.parse(content));

//     simpsonsFamily.push({ 'id': '8', 'name': 'Nelson Muntz' });
//     await fs.promises.writeFile(fileSimpsonFamily, JSON.stringify(simpsonsFamily));
//     console.log(simpsonsFamily);
// }
// insertNameSimpsons();


//* Exercício 4.6
async function replaceNameSimpsons () {
  const simpsonsFamily = await fs.promises
    .readFile(fileSimpsonFamily, encoding)
    .then(content => JSON.parse(content));

    simpsonsFamily.splice(-1, 1, { 'id': '5', 'name': 'Maggie Simpson' });
    await fs.promises.writeFile(fileSimpsonFamily, JSON.stringify(simpsonsFamily));
    console.log(simpsonsFamily);
}
replaceNameSimpsons();