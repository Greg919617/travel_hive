import Sequelize from 'sequelize';

  export let PlanModel = function(sequelizeDB){
    const Plan = sequelizeDB.define('plan', {
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
    Plan.associate = models => {
      Plan.belongsTo(models.User);
    }

  return Plan;
  }

 