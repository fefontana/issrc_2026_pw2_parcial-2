import { Router } from 'express';
//import { LibrosRoutes } from './librosRoutes.js';
//import { TalleresRoutes } from './talleresRoutes.js';
import LibrosRoutes from './librosRoutes.js';
import TalleresRoutes from './talleresRoutes.js';
// ... aqui importaríamos routers de otros modelos

/*
Indexaremos todos los routers individuales en uno global y declararemos el url estático donde se ubicará cada uno.
*/

const router = Router();

router.use('/libros', LibrosRoutes);
router.use('/talleres', TalleresRoutes);

export default router;