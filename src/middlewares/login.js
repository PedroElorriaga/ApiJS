/* eslint-disable no-undef */
import jsonWebToken from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json('Login necessario');
    const [, token] = authorization.split(' ');
    const { id_usuario, email } = jsonWebToken.verify(token, process.env.TOKEN_SECRET);
    if (!email) return res.status(401).json('Credenciais inválidas');
    req.idUsuario = id_usuario;
    req.emailUsuario = email;
    return next();
  } catch (err) {
    return res.status(401).json(`Erro: ${err}`);
  }
};
