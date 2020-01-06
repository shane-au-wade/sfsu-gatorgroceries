'use strict';

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
      queryInterface.createTable('feedback', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        type: Sequelize.TEXT,
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW')
        },

      }, { transaction: t })
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
