module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('commandsServices', {
      commands_id: {
        type: Sequelize.INTEGER,
        references: { model: 'commands', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      service_id: {
        type: Sequelize.INTEGER,
        references: { model: 'services', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      price: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  down: queryInterface => queryInterface.dropTable('commandsServices'),
};
