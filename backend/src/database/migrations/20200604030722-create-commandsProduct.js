module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('commandsProducts', {
      commands_id: {
        type: Sequelize.INTEGER,
        references: { model: 'commands', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false,
      },
    });
  },

  down: queryInterface => queryInterface.dropTable('commandsProducts'),
};
