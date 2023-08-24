"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const motoristas_controller_1 = require("../controllers/motoristas.controller");
const router = (0, express_1.default)();
// (coleccion motoristas) login
//http://localhost:8088/motoristas/login
router.post('/login', motoristas_controller_1.loginMotorista);
// (coleccion motoristas) resgistro
//http://localhost:8088/motoristas/registrar
router.post('/registrar', motoristas_controller_1.registroMotorista);
// (coleccion motoristas) Agregar motorista
//http://localhost:8088/motoristas/guardar
router.post('/guardar', motoristas_controller_1.agregarMotorista);
// (coleccion motoristas) Eliminar motorista
//http://localhost:8088/motoristas/:id/motorista/eliminar
router.delete('/:id/motorista/eliminar', motoristas_controller_1.eliminarMotorista);
// (coleccion motoristas) Obtener motorista
//http://localhost:8088/motoristas
router.get('/', motoristas_controller_1.obtenerMotorista);
exports.default = router;
