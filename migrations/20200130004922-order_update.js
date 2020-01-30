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

     
      queryInterface.removeColumn('orders', 'complete', { transaction: t }),
    
      queryInterface.addColumn('orders', 'status', {
        
          type: Sequelize.STRING,
          
    }, { transaction: t }),

    queryInterface.addColumn('orders', 'pickup', {
        
      type: Sequelize.STRING,
      
    }, { transaction: t }),

    queryInterface.addColumn('events', 'time_blocks', {
        
      type: Sequelize.DataTypes.JSON,
      
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
