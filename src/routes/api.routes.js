//Importando el router
import { Router } from 'express';
  //importando controladores
import { postResenia, getPong } from '../controllers/api.controller.js';

//inicializando enrutador
const router = Router();

//Rutas
router.get('/ping', getPong)
router.post('/resenia', postResenia);

//Exportacion del router
export default router;
