import express from "express";
import { eliminarEmpresa, guardarEmpresas, actualizarEmpresa, obtenerEmpresas } from "../controllers/empresas.controller";

const router = express();

// (coleccion empresas) agregar empresa 
//http://localhost:8088/empresas/guardar
router.post('/guardar', guardarEmpresas);

// (coleccion empresas) obtener empresas
//http://localhost:8088/empresas
router.get('/', obtenerEmpresas);

// (coleccion empresas) actualizar empresa 
//http://localhost:8088/empresas/:id/empresa/actualizar
router.put('/:id/empresa/actualizar', actualizarEmpresa);

// (coleccion empresas) eliminar empresa
//http://localhost:8088/empresas/:id/empresa/eliminar
router.delete('/:id/empresa/eliminar', eliminarEmpresa);

export default router;
