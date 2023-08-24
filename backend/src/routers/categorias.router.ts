import express from "express";
import { ClientRequest } from "http";
import { obtenerCategorias } from "../controllers/categorias.controller";

const router = express();

// (coleccion categorias) obtener categorias (Cliente)
//http://localhost:8088/categorias
router.get('/', obtenerCategorias);

//----------Ignorar por ahora
// (coleccion categorias) obtener cat pedidos
//http://localhost:8088/categorias
// router.get('/', obtenerCategorias);

//---------Cruce hecho en mongo
// (coleccion categorias) obtener detalle de productos de categoria (cruce)
//http://localhost:8088/categorias/detalle
// router.get('/detalle', obtenerCategorias);

export default router;
