import { Router } from 'express';
import alunoController from '../controllers/aluno'

const router = new Router();

router.post('/', alunoController.store);

export default router
