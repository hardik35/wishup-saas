module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.belongsToMany(models.Plans, {
      through: models.UsersSubscriptions,
      foreignKey: 'userId',
      as: 'plans',
    });
  };


  return Users;
};