import Sequelize, { Model } from 'sequelize';

class CommandService extends Model {
  static init(sequelize) {
    super.init(
      {
        order: Sequelize.INTEGER,
        price: Sequelize.DECIMAL(11, 2),
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Command, { foreignKey: 'command_id', as: 'command' });
    this.belongsTo(models.Service, { foreignKey: 'service_id', as: 'service' });
  }
}
export default CommandService;
