module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('UsersSubscriptions', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        planId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        planStartUTC: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        planEndUTC: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('UsersSubscriptions'),
  };
  