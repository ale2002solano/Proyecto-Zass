"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPedidosEntregados = exports.obtenerPedidosPendientes = exports.obtenerPedidosDisponibles = exports.obtenerPedidosConDireccion = exports.agregarPedido = void 0;
const agregarPedido = (req, res) => {
    res.send('agregar Pedido');
    res.end();
};
exports.agregarPedido = agregarPedido;
const obtenerPedidosConDireccion = (req, res) => {
    res.send('obtener Pedidos Con Direccion');
    res.end();
};
exports.obtenerPedidosConDireccion = obtenerPedidosConDireccion;
const obtenerPedidosDisponibles = (req, res) => {
    res.send('obtener Pedidos Disponibles');
    res.end();
};
exports.obtenerPedidosDisponibles = obtenerPedidosDisponibles;
const obtenerPedidosPendientes = (req, res) => {
    res.send('obtener Pedidos Pendientes');
    res.end();
};
exports.obtenerPedidosPendientes = obtenerPedidosPendientes;
const obtenerPedidosEntregados = (req, res) => {
    res.send('obtener Pedidos Entregados');
    res.end();
};
exports.obtenerPedidosEntregados = obtenerPedidosEntregados;
