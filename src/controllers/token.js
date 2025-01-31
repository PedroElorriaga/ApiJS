/* eslint-disable no-undef */
import jsonWebToken from 'jsonwebtoken';
import dotenv from 'dotenv';
import Usuario from "../models/Usuario";

dotenv.config();

class TokenController {
  async index(req, res) {
    const usuario = new Usuario();
    try {
      const { email, password } = req.body;
      if (!email && !password) {
        return res.status(401).json('Credenciais inválidas');
      }
      const usuario_db = await Usuario.findOne({
        where: { 'email': email }
      });
      if (!usuario_db) {
        return res.status(401).json('Usuário não existe');
      }
      if (!(await usuario.validacaoPassword(password, usuario_db.password_hash))) {
        return res.status(401).json('Credenciais inválidas');
      }
      const token = jsonWebToken.sign({ 'id_usuario': usuario_db.id_usuario, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION
      });
      console.log(token);
      req.headers.authorization = `Bearer ${token}`;
      return res.status(200).json('Usuário autenticado');
    } catch (err) {
      res.status(401).json(`Erro: ${err}`);
    }
  };
}

export default new TokenController();
