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
      queryInterface.createTable('items', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        order_id:  Sequelize.UUID,
        item: Sequelize.STRING,
        qty: Sequelize.INTEGER,
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW')
        },
        updated_at: {
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
