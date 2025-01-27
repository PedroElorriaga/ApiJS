import { Router } from 'express';
import usuarioController from '../controllers/usuario'

const router = new Router();

router.post('/', usuarioController.store);

export default router
