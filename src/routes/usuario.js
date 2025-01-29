import { Router } from 'express';
import usuarioController from '../controllers/usuario';
import login from '../middlewares/login';

const router = new Router();

router.post('/', usuarioController.store);
router.get('/find', login, usuarioController.index);
router.get('/find/:id', login, usuarioController.indexOne);
router.delete('/delete', login, usuarioController.delete);
router.put('/update', login, usuarioController.update);

export default router;
