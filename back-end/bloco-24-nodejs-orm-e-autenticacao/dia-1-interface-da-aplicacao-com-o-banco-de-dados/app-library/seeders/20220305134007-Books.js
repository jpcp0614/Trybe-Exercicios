'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert('Books',
      [
        {
          title: 'NODE Essencial',
          author: 'Ricardo R. Lecheta',
          pageQuantity: 213,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'TypeScript',
          author: 'Marcelo Soares da Costa',
          pageQuantity: 265,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'Lógica de Programação e Algoritmos com JavaScript',
          author: 'Edécio Fernando Iepsen',
          pageQuantity: 317,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }
      ], {}
    ),

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
