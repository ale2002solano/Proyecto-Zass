"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pedidos_controller_1 = require("../controllers/pedidos.controller");
const router = (0, express_1.default)();
// (coleccion pedidos) agregar pedido
//http://localhost:8088/pedidos/agregar
router.put('/guardar', pedidos_controller_1.agregarPedido);
// (coleccion pedidos) obtener pedido y direccion de usuario (cruce)
//http://localhost:8088/pedidos/:id/pedido
router.get('/:id/pedido', pedidos_controller_1.obtenerPedidosConDireccion);
// (coleccion pedidos) obtener pedidos disponibles
//http://localhost:8088/pedidos/disponibles
router.get('/disponibles', pedidos_controller_1.obtenerPedidosDisponibles);
// (coleccion pedidos) obtener pedidos pendientes
//http://localhost:8088/pedidos/pendientes
router.get('/pendientes', pedidos_controller_1.obtenerPedidosPendientes);
// (coleccion pedidos) obtener pedidos entregados
//http://localhost:8088/pedidos/entregados
router.get('/entregados', pedidos_controller_1.obtenerPedidosEntregados);
exports.default = router;
