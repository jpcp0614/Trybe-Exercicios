const connection = require('./connection');
const serialize = require('../helpers/serialize');

async function createUser (firstName, lastName, email, password) {
  const QUERY = 'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);';

  return await connection.execute(QUERY, [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }))

}

module.exports = {
  createUser,
};