const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'jp',
  password: 'Fisiologia10',
  host: 'localhost',
  database: 'users_crud',
  port: 3306
});

module.exports = connection;