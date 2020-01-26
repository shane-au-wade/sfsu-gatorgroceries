'use strict';


const records = [{type: 'admin'
    , first_name: 'admin'
    , last_name: 'admin'
    , id: '2ffbd298-408d-11ea-b77f-2e728ce88125'
    , email: 'admin@gg.sfsu.edu'
    , password: '$2b$10$7jvC/eoHSM0dz.dIBl8Ij.zSMBytIqXfC0XH6OFfc7msQrJivvTA6'
  }]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

   return queryInterface.sequelize.transaction((t) => {
    return Promise.all([
      queryInterface.bulkInsert('users', records, { transaction: t })
    ])
  })

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
