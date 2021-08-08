module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.belongsToMany(models.Plans, {
      through: 'UsersSubscriptions',
      foreignKey: 'userId',
      as: 'users',
    });
  };


  return Users;
};