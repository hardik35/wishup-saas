module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Users', {
        Id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        UserName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        CreatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        UpdatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Users'),
  };
  