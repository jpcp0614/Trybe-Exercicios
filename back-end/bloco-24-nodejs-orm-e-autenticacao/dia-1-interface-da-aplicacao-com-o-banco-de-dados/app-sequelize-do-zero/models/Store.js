const Store = (Sequelize, DataTypes) => {
  const Store = Sequelize.define('Store', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  },
  {
    timestamps: false
  }
  );

  return Store;
}

module.exports = Store;