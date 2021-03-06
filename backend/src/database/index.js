import Sequelize from 'sequelize'; // sequelize para conexão e manipulação do db
import mongoose from 'mongoose';
// Models
import User from '../app/models/User'; // model do usuario
import File from '../app/models/File'; // model do File
import Command from '../app/models/Command'; // model do Command
import Product from '../app/models/Product'; // model do Product
import CommandProduct from '../app/models/CommandProduct'; // model do Product
import Service from '../app/models/Service'; // model do Product
import CommandService from '../app/models/CommandService'; // model do Product
// config
import databaseConfig from '../config/database'; // configuração do db

const models = [
  User,
  File,
  Command,
  Product,
  CommandProduct,
  CommandService,
  Service,
]; // array para inicialização de models

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
