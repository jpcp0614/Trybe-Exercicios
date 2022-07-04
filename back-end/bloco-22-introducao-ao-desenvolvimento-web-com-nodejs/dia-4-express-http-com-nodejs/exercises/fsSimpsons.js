const fs = require('fs').promises;

const FILENAME = './simpsons.json';
const ENCODING = 'utf-8';

async function getSimpsons () {
  try {
    const simpsons = await fs.readFile(FILENAME, ENCODING);
    return JSON.parse(simpsons);
  } catch (error) {
    console.log('Error:', error);
  };
};

async function setSimpsons (newSimpson) {
  await fs.writeFile(FILENAME, JSON.stringify(newSimpson));
}


module.exports = { getSimpsons, setSimpsons };