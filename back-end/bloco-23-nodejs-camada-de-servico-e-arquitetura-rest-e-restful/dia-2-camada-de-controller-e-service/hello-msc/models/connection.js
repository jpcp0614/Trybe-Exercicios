// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'jp',
  password: 'Fisiologia10',
  database: 'model_example',
  port: 3306
});

module.exports = connection;