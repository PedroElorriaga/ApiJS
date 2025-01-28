import Aluno from "../models/Aluno";

class AlunoController {
  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(
        req.body
      );
      res.status(200).json(novoAluno);
    } catch (err) {
      console.log(err);
      res.status(401).json('Erro');
    }
  };
}

export default new AlunoController();
