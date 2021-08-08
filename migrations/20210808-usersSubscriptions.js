module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('UsersSubscriptions', {
        Id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        UserId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        PlanId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        PlanStartUTC: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
        PlanEndUTC: {
          allowNull: false,
          type: Sequelize.BIGINT,
        },
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('UsersSubscriptions'),
  };
  