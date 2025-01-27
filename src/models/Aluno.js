import Sequelize, { Model } from 'sequelize';


export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
      },
      sobrenome: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      idade: {
        type: Sequelize.INTEGER,
      },
    }, {
      sequelize,
    });
    return this
  }
};
