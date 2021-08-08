module.exports = (sequelize, DataTypes) => {
    const UsersSubscriptions = sequelize.define('UsersSubscriptions', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      planId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      planStartUTC: {
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      planEndUTC: {
        allowNull: false,
        type: DataTypes.BIGINT,
      },
    });
    return UsersSubscriptions;
  };