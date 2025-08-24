//Importaciones de modulos
import express from 'express';
import path from "path";
import "ejs";

import { fileURLToPath } from 'url';
 //Rutas
import indexRoutes from './routes/index.routes.js';
import apiRoutes from './routes/api.routes.js';
import morgan from 'morgan';

//Configuracion de rutas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Inicializacion de express
const app = express();

//Configuraciones
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middlewares
app.use(morgan("dev"));
 //express middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/public/", express.static(path.join(__dirname, "public")));

//Rutas
app.use(indexRoutes);
app.use("/api/", apiRoutes);

//404
app.use((req,res) => {
    res.render("not-found");
});

//Exportacion
export default app;