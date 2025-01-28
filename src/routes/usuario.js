import { Router } from 'express';
import usuarioController from '../controllers/usuario';

const router = new Router();

router.post('/', usuarioController.store);
router.get('/find', usuarioController.index);
router.get('/find/:id', usuarioController.indexOne);
router.delete('/delete/:id', usuarioController.delete);
router.put('/update/:id', usuarioController.update);

export default router;
