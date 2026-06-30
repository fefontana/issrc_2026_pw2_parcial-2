import { Router } from 'express';

import { getTalleres, getTallerById } from '../controllers/taller.js';

const router = Router();

router.get('/', getTalleres);
router.get('/:id', getTallerById);

export default router;