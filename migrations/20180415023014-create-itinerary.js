'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itineraries', {      
      id: {
        allowNull: false,
        primaryKey: true,
        type:Sequelize.UUID,
        default: Sequelize.UUIDV4
      },      
      planId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      place:{
        type: Sequelize.STRING  
      },
      startTime:{
        type: Sequelize.TIME,
        allowNull: false
      }, 
      endTime: {
        type: Sequelize.TIME,
        allowNull: false  
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },         
      inspirationId:{
        type: Sequelize.UUID,
        allowNull: false,    
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
    return queryInterface.dropTable('itineraries');
  }
};