import express from "express";
import { agregarMotorista, eliminarMotorista, loginMotorista, obtenerMotorista, registroMotorista } from "../controllers/motoristas.controller";

const router = express();

// (coleccion motoristas) login
//http://localhost:8088/motoristas/login
router.post('/login', loginMotorista);

// (coleccion motoristas) resgistro
//http://localhost:8088/motoristas/registrar
router.post('/registrar', registroMotorista);

// (coleccion motoristas) Agregar motorista
//http://localhost:8088/motoristas/guardar
router.post('/guardar', agregarMotorista);

// (coleccion motoristas) Eliminar motorista
//http://localhost:8088/motoristas/:id/motorista/eliminar
router.delete('/:id/motorista/eliminar', eliminarMotorista);

// (coleccion motoristas) Obtener motorista
//http://localhost:8088/motoristas
router.get('/', obtenerMotorista);


export default router;

