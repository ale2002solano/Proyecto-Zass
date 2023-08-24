"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const empresas_controller_1 = require("../controllers/empresas.controller");
const router = (0, express_1.default)();
// (coleccion empresas) agregar empresa 
//http://localhost:8088/empresas/guardar
router.post('/guardar', empresas_controller_1.guardarEmpresas);
// (coleccion empresas) obtener empresas
//http://localhost:8088/empresas
router.get('/', empresas_controller_1.obtenerEmpresas);
// (coleccion empresas) actualizar empresa 
//http://localhost:8088/empresas/:id/empresa/actualizar
router.put('/:id/empresa/actualizar', empresas_controller_1.actualizarEmpresa);
// (coleccion empresas) eliminar empresa
//http://localhost:8088/empresas/:id/empresa/eliminar
router.delete('/:id/empresa/eliminar', empresas_controller_1.eliminarEmpresa);
exports.default = router;
