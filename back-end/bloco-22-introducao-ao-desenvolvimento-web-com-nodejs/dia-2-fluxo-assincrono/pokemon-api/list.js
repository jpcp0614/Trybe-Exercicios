const axios = require('axios');

const handleResponse = (response) => console.log(response.data.name)
const URL = (id) => `http://pokeapi.co/api/v2/pokemon/${id}`

const getPokemonById = async (id) => {
  const response = await axios.get(URL(id))
  return response.data.name
}

const promises = [];

const main = async () => {
  for (let i = 1; i <= 10; i++) {
    const promise = getPokemonById(i);
    promises.push(promise);
  }
  const names = await Promise.all(promises);
  console.log(names);
}
main();