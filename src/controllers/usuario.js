import Usuario from "../models/Usuario";

class UsuarioController {
  async store(req, res) {
    try {
      const novoUsuario = await Usuario.create(
        req.body
      );
      res.status(200).json(novoUsuario);
    } catch (err) {
      console.log(err)
      res.status(401).json({
        errors: err.errors.map(err => err.message)
      });
    }
  };
}

export default new UsuarioController();
