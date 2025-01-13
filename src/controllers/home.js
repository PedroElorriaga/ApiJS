import Aluno from "../models/Aluno";

class HomeController {
  async homeIndex(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Pedro',
      sobrenome: 'Elorriaga',
      email: 'phes@test.com',
      idade: 22
    });
    res.status(200).json(novoAluno);
  };
}

export default new HomeController();
