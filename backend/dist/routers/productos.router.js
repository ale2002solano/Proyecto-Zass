"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productos_controller_1 = require("../controllers/productos.controller");
const router = (0, express_1.default)();
// (coleccion productos) obtener productos (cruce categorias)
//http://localhost:8088/productos
router.get('/', productos_controller_1.obtenerProductos);
// (coleccion productos) obtener un productos
//http://localhost:8088/productos/:id/producto
router.get('/:id/producto', productos_controller_1.obtenerProducto);
// (coleccion productos) actualizar cantidad de productos para pedidos
//http://localhost:8088/productos/:id/producto/actualizar
router.put('/:id/producto/actualizar', productos_controller_1.actualizarProducto);
// (coleccion productos) actualizar cantidad de productos para pedidos
//http://localhost:8088/productos/:id/producto/actualizar/cantidad
router.put('/:id/producto/actualizar/cantidad', productos_controller_1.actualizarProductoCantidad);
// (coleccion productos) agregar producto
//http://localhost:8088/productos/guardar
router.post('/guardar', productos_controller_1.guardarProducto);
// (coleccion productos) agregar producto
//http://localhost:8088/productos/:id/categoria
router.get('/:id/categoria', productos_controller_1.obtenerProductosPorCategoria);
//  eliminar producto
//http://localhost:8088/productos/:id/producto/eliminar
router.delete('/:id/producto/eliminar', productos_controller_1.eliminarProducto);
exports.default = router;
