class HomeController {
  async index(req, res) {
    try {
      res.send('<h1>Rotas disponiveis</h1><p>/alunos, /contatos</p>');
    } catch (err) {
      console.log(err);
      res.status(401).json('Erro');
    }
  };
}

export default new HomeController();
