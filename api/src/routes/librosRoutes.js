import { Router } from 'express';

import { getLibros, getLibroById } from '../controllers/libro.js';

const router = Router();

router.get('/', getLibros);
router.get('/:id', getLibroById);

export default router;