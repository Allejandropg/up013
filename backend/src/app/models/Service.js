import Sequelize, { Model } from 'sequelize';

class Service extends Model {
  static init(sequelize) {
    super.init(
      {
        type: Sequelize.STRING,
        price: Sequelize.DECIMAL(11, 2),
        is_active: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
export default Service;
