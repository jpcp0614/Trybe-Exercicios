
module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define('product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, { timestamps: false, tablename: 'products' });

  return Product;
}
