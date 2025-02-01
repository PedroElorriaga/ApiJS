import express from 'express';
import aluno from './routes/aluno';
import usuario from './routes/usuario';
import home from './routes/home';
import token from './routes/token';
import dotenv from 'dotenv';
import './database';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  };

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  };

  routes() {
    this.app.use('/', home);
    this.app.use('/alunos', aluno);
    this.app.use('/usuarios', usuario);
    this.app.use('/auth', token);
  };
}

export default new App().app; // Aqui estamos exportando somente parametro do contructuor app
