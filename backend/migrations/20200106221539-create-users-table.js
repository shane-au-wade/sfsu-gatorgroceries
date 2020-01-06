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
      queryInterface.createTable('users', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        type: Sequelize.STRING,
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        student_id: Sequelize.STRING,
        student_email: Sequelize.STRING,
        survey_complete: Sequelize.BOOLEAN, 
        password: {
          type: Sequelize.STRING(1234),
          defaultValue: null
        },
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
