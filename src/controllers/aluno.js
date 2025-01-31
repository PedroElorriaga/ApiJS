import Aluno from "../models/Aluno";

class AlunoController {
  async store(req, res) {
    try {
      req.body['id_usuario'] = req.idUsuario;
      if (await Aluno.findOne({
        where: { 'id_usuario': req.idUsuario }
      })) return res.status(401).json('Você ja possui um aluno cadastrado');
      await Aluno.create(req.body);
      return res.status(200).json('Aluno criado com sucesso');
    } catch (err) {
      console.log(err);
      return res.status(401).json(`Ocorreu um erro: ${err.errors.map(err => err.message)}`);
    }
  }

  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['nome', 'sobrenome', 'idade']
      });
      return res.status(200).json({ alunos });
    } catch (err) {
      return res.status(401).json(`Ocorreu um erro: ${err.errors.map(err => err.message)}`);
    }
  }

  async update(req, res) {
    try {
      const alunos = await Aluno.findOne({
        where: { 'id': req.idUsuario }
      });
      if (!alunos) return res.status(401).json('Usuário não existe!');
      await alunos.update(req.body);
      return res.status(200).json('Usuário atualizado com sucesso!');
    } catch (err) {
      return res.status(401).json(`Ocorreu um erro: ${err.errors.map(err => err.message)}`);
    }
  }

  async delete(req, res) {
    try {
      const alunos = await Aluno.findOne({
        where: { 'id': req.idUsuario }
      });
      if (!alunos) return res.status(401).json('Usuário não existe!');
      await alunos.destroy();
      return res.status(200).json('Usuário deletado com sucesso!');
    } catch (err) {
      return res.status(401).json(`Ocorreu um erro: ${err.errors.map(err => err.message)}`);
    }
  }

  async indexOne(req, res) {
    try {
      const aluno = await Aluno.findOne({
        where: { 'id': req.idUsuario }
      });
      if (!aluno) return res.status(401).json('Usuário não existe!');
      return res.status(200).json({ aluno });
    } catch (err) {
      return res.status(401).json(`Ocorreu um erro: ${err.errors.map(err => err.message)}`);
    }
  }
}

export default new AlunoController();
