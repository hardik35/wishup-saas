module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Plans', {
        Id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        PlanName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        DaysValidity: {
           type: Sequelize.INTEGER,
           allowNull: false,
        },
        CostUSD: {
            type: Sequelize.FLOAT(3),
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Plans'),
  };
  