const connection = require('./connection');

async function findCep (cep) {
  const QUERY = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep=?;';
  const [result] = await connection.execute(QUERY, [cep]);
  console.log(result)
  return result;
};

module.exports = {
  findCep,
};