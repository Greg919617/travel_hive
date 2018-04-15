'use strict';
require("babel-polyfill");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [      
      await queryInterface.addColumn('inspirations', 'title', {        
        type: Sequelize.STRING(),
        allowNull: false,        
      }),    
      await queryInterface.addColumn('inspirations', 'attribution', {        
        type: Sequelize.STRING(),
        allowNull: false,        
      }),     
      
    ]
    
  },
  down: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.removeColumn('inspirations', 'title'),     
      await queryInterface.removeColumn('inspirations', 'attribution'),     
    ]  
  }    
};