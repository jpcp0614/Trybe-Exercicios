"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const SurgeriesTable = await queryInterface.createTable("Surgeries", {
      surgery_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      specialty: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      doctor: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
    });

    return SurgeriesTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("Surgeries"),
};