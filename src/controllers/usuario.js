import Usuario from "../models/Usuario";
import Aluno from "../models/Aluno";

class UsuarioController {
  async store(req, res) {
    try {
      console.log(req.body);
      await Usuario.create(
        req.body
      );
      return res.status(200).json('Usuário criado com sucesso!');
    } catch (err) {
      console.log(err);
      return res.status(401).json(`Ocorreu um erro: ${err.errors.map(err => err.message)}`);
    }
  };

  async index(req, res) {
    try {
      const usuarios = await Usuario.findAll({
        attributes: ['id_usuario', 'username', 'email', 'cpf', 'created_at', 'updated_at']
      });
      return res.status(200).json({
        usuarios: usuarios
      });
    } catch (err) {
      console.log(err);
    }
  };

  async indexOne(req, res) {
    try {
      const usuario = await Usuario.findOne({
        where: { 'id_usuario': req.params.id },
        attributes: ['id_usuario', 'username', 'email', 'cpf', 'created_at', 'updated_at']
      });
      if (!usuario) return res.status(200).json('Nenhum usuário encontrado!');
      return res.status(200).json(usuario);
    } catch (err) {
      console.log(err);
    }
  }

  async delete(req, res) {
    try {
      const usuario = await Usuario.findOne({
        where: { 'id_usuario': req.idUsuario }
      });
      if (!usuario) return res.status(401).json('Nenhum usuário encontrado!');
      if (Aluno.findOne({
        where: { 'id_usuario': req.idUsuario }
      })) return res.status(401).json('Existe um aluno cadastrado no usuário, exclua o aluno antes de deletar a conta');
      await Usuario.destroy({ where: { 'id_usuario': req.idUsuario } });
      return res.status(200).json('Usuário deletado com sucesso!');
    } catch (err) {
      console.log(err);
    }
  }

  async update(req, res) {
    try {
      const usuario = await Usuario.findOne({
        where: { 'id_usuario': req.idUsuario }
      });
      if (!usuario) return res.status(401).json('Usuário não existe!');
      const keys = Object.keys(req.body);
      for (const key of keys) {
        await Usuario.update(
          { [key]: req.body[key] },
          { where: { 'id_usuario': req.idUsuario } }
        );
      }
      return res.status(200).json('Usuário atualizado com sucesso!');
    } catch (err) {
      return res.status(401).json(`Ocorreu um erro: ${err.errors.map(err => err.message)}`);
    }
  }
}

export default new UsuarioController();
