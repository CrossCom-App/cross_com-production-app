//Importando el router
import { Router } from 'express';
  //importando controladores
import { getIndex, getAbout, getQuotes } from '../controllers/index.controller.js';

//inicializando enrutador
const router = Router();

//Rutas
router.get('/', getIndex);
router.get('/about', getAbout);
router.get('/versiculos', getQuotes);

//Exportacion del router
export default router;
