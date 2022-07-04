const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'jp',
  password: 'Fisiologia10',
  host: 'localhost',
  database: 'model_example',
  port: 3306 //* porta padrão do mysql
});

module.exports = connection;