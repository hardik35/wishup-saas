module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CreatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    UpdatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });

  return Users;
};