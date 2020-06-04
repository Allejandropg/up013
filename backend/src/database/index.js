import Sequelize from 'sequelize'; // sequelize para conexão e manipulação do db
import mongoose from 'mongoose';
// Models
import User from '../app/models/User'; // model do usuario
import File from '../app/models/File'; // model do File
import Command from '../app/models/Command'; // model do Command
// config
import databaseConfig from '../config/database'; // configuração do db

const models = [User, File, Command]; // array para inicialização de models

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    const teste = async () => {
      try {
        const db = new Sequelize(databaseConfig);
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    };
    teste();
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
