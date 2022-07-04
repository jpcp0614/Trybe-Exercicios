const axios = require('axios');

const URL = 'http://pokeapi.co/api/v2/pokemon/1';

/*
* const response = axios.get(URL);

* console.log(response); // sem tratar, retorna uma promise pending
*/

// then
axios.get(URL)
  .then(response => console.log(response.data.name));

// then v2
const handleResponse = (response) => console.log(response.data.name)
  axios.get(URL)
    .then(handleResponse);

// async
const main = async () => {
  const response = await axios.get(URL)
  console.log(response.data.name)
  // ou
  handleResponse(response);
}
main();