module.exports = (sequelize, DataTypes) => {
    const Plans = sequelize.define('Plans', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      daysValidity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      costUSD: {
        type: DataTypes.FLOAT(3),
        allowNull: false,
      },
    });
  
    Plans.associate = (models) => {
        Plans.belongsToMany(models.Users, {
            through: models.UsersSubscriptions,
            foreignKey: 'planId',
            // as: 'users',
        });
    };
  
  
    return Plans;
  };