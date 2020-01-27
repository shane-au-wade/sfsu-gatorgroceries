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
      queryInterface.createTable('events', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        created_by: Sequelize.UUID,
        active: Sequelize.BOOLEAN,
        date: Sequelize.DATEONLY,
        time: Sequelize.STRING,
        name: Sequelize.STRING,
        location: Sequelize.STRING,
        menu: Sequelize.DataTypes.JSON,
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW')
        },
        updated_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
        }
    
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
