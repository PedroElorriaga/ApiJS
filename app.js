import express from 'express';
import home from './src/routes/home';
import dotenv from 'dotenv';
import './src/database'

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
  };
}

export default new App().app; // Aqui estamos exportando somente parametro do contructuor app
