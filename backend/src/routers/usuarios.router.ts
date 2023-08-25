import express from "express";
import { actualizarUsuario, loginUsuario, obtenerUsuarios, registrarUsuarios } from "../controllers/usuarios.controller";

const router = express();

// (coleccion usuarios) login (correo y contrasena)
//http://localhost:8088/usuarios/login
router.post('/login', loginUsuario);


// (coleccion usuarios) resgistro (nombres, apellidos, correo, contrasena y confirmar contrasena)
//http://localhost:8088/usuarios/registrar
router.post('/registrar', registrarUsuarios);

// (coleccion usuarios) Obtener usuarios
//http://localhost:8088/usuarios/:id/actualizar
router.get('/', obtenerUsuarios);

// (coleccion usuarios) actualizar usuario con direccion
//http://localhost:8088/usuarios/:id/actualizar
router.put('/:id/actualizar', actualizarUsuario);


export default router;