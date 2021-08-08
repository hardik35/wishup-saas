module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable('Plans', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        daysValidity: {
           type: Sequelize.INTEGER,
           allowNull: false,
        },
        costUSD: {
            type: Sequelize.FLOAT(3),
            allowNull: false,
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Plans'),
  };
  