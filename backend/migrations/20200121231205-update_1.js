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

      queryInterface.removeColumn('users', 'id', { transaction: t }),
      queryInterface.removeColumn('users', 'student_email', { transaction: t }),
      queryInterface.removeColumn('orders', 'id', { transaction: t }),
      queryInterface.removeColumn('events', 'id', { transaction: t }),

      queryInterface.addColumn('users', 'id', {
        
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1(),
          primaryKey: true
      
    }, { transaction: t }),

   
      queryInterface.addColumn('events', 'id', {
        
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1(),
          primaryKey: true
      
    }, { transaction: t }),

   

      queryInterface.addColumn('orders', 'id', {
        
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1(),
          primaryKey: true
    }, { transaction: t }),

    
      queryInterface.addColumn('users', 'email', {
        
          type: Sequelize.STRING,
          unique: true
      
    }, { transaction: t }),

      
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
