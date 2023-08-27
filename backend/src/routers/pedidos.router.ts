import express from "express";
import { actualizarPedido, agregarPedido, obtenerPedido, obtenerPedidos, obtenerPedidosDisponibles, obtenerPedidosEntregados, obtenerPedidosPendientes } from "../controllers/pedidos.controller";

const router = express();

// (coleccion pedidos) agregar pedido
//http://localhost:8088/pedidos/agregar
router.put('/guardar', agregarPedido);

// (coleccion pedidos) obtener pedido y direccion de usuario (cruce)
//http://localhost:8088/pedidos/:id/pedido
router.get('/:id/pedido', obtenerPedido);

// (coleccion pedidos) actualizar
//http://localhost:8088/pedidos/:id/pedido/actualizar
router.put('/:id/pedido/actualizar', actualizarPedido);

// (coleccion pedidos) obtener pedido y direccion de usuario (cruce)
//http://localhost:8088/pedidos/
router.get('/', obtenerPedidos);

// (coleccion pedidos) obtener pedidos disponibles
//http://localhost:8088/pedidos/disponibles
router.get('/disponibles', obtenerPedidosDisponibles);

// (coleccion pedidos) obtener pedidos pendientes
//http://localhost:8088/pedidos/pendientes
router.get('/pendientes', obtenerPedidosPendientes);

// (coleccion pedidos) obtener pedidos entregados
//http://localhost:8088/pedidos/entregados
router.get('/entregados', obtenerPedidosEntregados);


export default router;
