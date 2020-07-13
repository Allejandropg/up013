import Sequelize, { Model } from 'sequelize';

class CommandProduct extends Model {
  static init(sequelize) {
    super.init(
      {
        order: Sequelize.INTEGER,
        quantity: Sequelize.INTEGER,
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
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
  }
}
export default CommandProduct;
