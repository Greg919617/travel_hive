'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('plans', {      
      id: {
        allowNull: false,
        primaryKey: true,
        type:Sequelize.UUID,
        default: Sequelize.UUIDV4
      },     
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
      },   
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('plans');
  }
};