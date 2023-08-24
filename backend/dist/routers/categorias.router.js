"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categorias_controller_1 = require("../controllers/categorias.controller");
const router = (0, express_1.default)();
// (coleccion categorias) obtener categorias (Cliente)
//http://localhost:8088/categorias
router.get('/', categorias_controller_1.obtenerCategorias);
//----------Ignorar por ahora
// (coleccion categorias) obtener cat pedidos
//http://localhost:8088/categorias
// router.get('/', obtenerCategorias);
//---------Cruce hecho en mongo
// (coleccion categorias) obtener detalle de productos de categoria (cruce)
//http://localhost:8088/categorias/detalle
// router.get('/detalle', obtenerCategorias);
exports.default = router;
