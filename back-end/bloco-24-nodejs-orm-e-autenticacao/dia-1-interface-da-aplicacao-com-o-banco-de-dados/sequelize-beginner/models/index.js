require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  dialect: 'mysql'
});

// const buildModelProduct = require('./Product');
// const Product = buildModelProduct(sequelize, DataTypes);

const Product = require('./Product')(sequelize, DataTypes);

module.exports = {
  Product,
};