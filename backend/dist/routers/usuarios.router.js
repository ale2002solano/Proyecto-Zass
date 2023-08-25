"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = (0, express_1.default)();
// (coleccion usuarios) login (correo y contrasena)
//http://localhost:8088/usuarios/login
router.post('/login', usuarios_controller_1.loginUsuario);
// (coleccion usuarios) resgistro (nombres, apellidos, correo, contrasena y confirmar contrasena)
//http://localhost:8088/usuarios/registrar
router.post('/registrar', usuarios_controller_1.registrarUsuarios);
// (coleccion usuarios) Obtener usuarios
//http://localhost:8088/usuarios/:id/actualizar
router.get('/', usuarios_controller_1.obtenerUsuarios);
// (coleccion usuarios) actualizar usuario con direccion
//http://localhost:8088/usuarios/:id/actualizar
router.put('/:id/actualizar', usuarios_controller_1.actualizarUsuario);
exports.default = router;
