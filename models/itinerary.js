import Sequelize from 'sequelize';

  export let ItineraryModel = function(sequelizeDB){
    const Itinerary = sequelizeDB.define('itinerary', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,        
      },      
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
      },  
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    Itinerary.associate = models => {
      Itinerary.belongsTo(models.Plan);
    }

  return Itinerary;
  }