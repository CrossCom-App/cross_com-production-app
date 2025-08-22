//Importando el router
import { Router } from 'express';
  //importando controladores
import { getIndex, getAbout, getQuotes, getResenias } from '../controllers/index.controller.js';

//inicializando enrutador
const router = Router();

//Rutas
router.get('/', getIndex);
router.get('/about', getAbout);
router.get('/versiculos', getQuotes);
router.get('/resenias', getResenias);

//Exportacion del router
export default router;
