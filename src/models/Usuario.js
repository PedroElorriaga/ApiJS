import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';


export default class Usuario extends Model {
  static init(sequelize) {
    super.init({
      // DECLAREI A PRIMARY KEY, PQ O SEQUELIZE RECONHECE POR PADRAO SOMENTE O "id"
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'O username ja está cadastrado em outro usuário'
        },
        validate: {
          len: {
            args: [1, 255],
            msg: 'O username precisa ser preenchido corretamente'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'O email ja está cadastrado em outro usuário'
        },
        validate: {
          isEmail: {
            msg: 'O email precisa ser um email válido'
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          is: {
            args: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d])/,
            msg: 'A senha deve conter no minimo (1 Maiscula, 1 Minuscula, 1 Especial e 1 Numero)'
          }
        }
      },
      cpf: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'O CPF ja está cadastrado em outro usuário'
        },
        validate: {
          len: {
            args: [11, 11],
            msg: 'O cpf precisa se preenchido corretamente'
          },
          isNumeric: {
            msg: 'O cpf aceita somente números'
          }
        }
      }
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }

  validacaoPassword(password, password_hash) {
    return bcryptjs.compare(password, password_hash);
  }
};
