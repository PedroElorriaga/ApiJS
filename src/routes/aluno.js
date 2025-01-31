import { Router } from 'express';
import alunoController from '../controllers/aluno';
import login from '../middlewares/login';

const router = new Router();

router.post('/', login, alunoController.store);
router.get('/find', login, alunoController.index);
router.put('/update', login, alunoController.update);
router.delete('/delete', login, alunoController.delete);
router.get('/findOne', login, alunoController.indexOne);

export default router;
