import express from "express";
import { actualizarProducto, eliminarProducto, guardarProducto, obtenerProducto, obtenerProductos } from "../controllers/productos.controller";

const router = express();

// (coleccion productos) obtener productos (cruce categorias)
//http://localhost:8088/productos
router.get('/', obtenerProductos);

// (coleccion productos) obtener un productos
//http://localhost:8088/productos/:id/producto
router.get('/:id/producto', obtenerProducto);

// (coleccion productos) actualizar cantidad de productos para pedidos
//http://localhost:8088/productos/:id/producto/actualizar
router.put('/:id/producto/actualizar', actualizarProducto);

// (coleccion productos) agregar producto
//http://localhost:8088/productos/guardar
router.post('/guardar', guardarProducto);

//  eliminar producto
//http://localhost:8088/productos/:id/producto/eliminar
router.delete('/:id/producto/eliminar', eliminarProducto);

export default router;
