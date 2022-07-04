'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    queryInterface.bulkInsert('Stores', [
      {
        name: 'Magazine',
        description: 'Loja que tem material elétrico'
      },
      {
        name: 'Tem de tudo',
        description: 'Pode vir que tem de tudo'
      },
      {
        name: "Toy Store",
        description: "Temos muitos brinquedos"
      },
      {
        name: "House Cards",
        description: "A Sua loja de cartas"
      }
    ])
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.bulkDelete('Stores', null, {})
  }
};
