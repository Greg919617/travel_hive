  import Sequelize from 'sequelize';

  export let InspirationModel = function(sequelizeDB){
    const Inspiration = sequelizeDB.define('inspiration', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,        
      },    
      image: {
        type: Sequelize.TEXT,
      },  
      description: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
      },  
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      attribution: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    Inspiration.associate = models => {
      Inspiration.belongsTo(models.User);
    }

  return Inspiration;
  }

 