import { Router } from 'express';
import tokenController from '../controllers/token';

const router = new Router();

router.get('/', tokenController.index);

export default router;
