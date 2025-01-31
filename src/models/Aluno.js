import Sequelize, { Model } from 'sequelize';


export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      id_aluno: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      id_usuario: {
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      sobrenome: {
        type: Sequelize.STRING,
      },
      idade: {
        type: Sequelize.INTEGER,
      },
    }, {
      sequelize,
    });
    return this;
  }
};
