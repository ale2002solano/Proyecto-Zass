"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPedidosEntregados = exports.obtenerPedidosPendientes = exports.obtenerPedidosDisponibles = exports.obtenerPedidos = exports.obtenerPedido = exports.agregarPedido = void 0;
const pedidos_schema_1 = require("../models/pedidos.schema");
const agregarPedido = (req, res) => {
    let pedido = new pedidos_schema_1.PedidoSchema(req.body);
    pedido.save()
        .then((result) => {
        res.send({ status: true, message: 'Pedido agregado', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.agregarPedido = agregarPedido;
const obtenerPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    pedidos_schema_1.PedidoSchema.findOne({ idPedido: req.params.id }, { cantidad: false })
        .then((result) => {
        res.send({ status: true, message: 'Pedido obtenido', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
});
exports.obtenerPedido = obtenerPedido;
const obtenerPedidos = (req, res) => {
    pedidos_schema_1.PedidoSchema.find({}, { cantidad: false })
        .then((result) => {
        res.send({ status: true, message: 'Pedidos obtenidos', result });
        res.end();
    }).catch((error) => {
        res.send("No encontrados");
        res.end();
    });
};
exports.obtenerPedidos = obtenerPedidos;
const obtenerPedidosDisponibles = (req, res) => {
    pedidos_schema_1.PedidoSchema.find({ estadoOrden: "disponible" })
        .then((result) => {
        res.send({ status: true, message: 'Pedido disponible obtenido', result });
        res.end();
    }).catch((error) => {
        res.send("No hay pedidos disponibles");
        res.end();
    });
};
exports.obtenerPedidosDisponibles = obtenerPedidosDisponibles;
const obtenerPedidosPendientes = (req, res) => {
    pedidos_schema_1.PedidoSchema.find({ estadoOrden: "pendiente" })
        .then((result) => {
        res.send({ status: true, message: 'Pedido pendiente obtenido', result });
        res.end();
    }).catch((error) => {
        res.send("No hay pedidos disponibles");
        res.end();
    });
};
exports.obtenerPedidosPendientes = obtenerPedidosPendientes;
const obtenerPedidosEntregados = (req, res) => {
    pedidos_schema_1.PedidoSchema.find({ estadoOrden: "entregado" })
        .then((result) => {
        res.send({ status: true, message: 'Pedido entregado obtenido', result });
        res.end();
    }).catch((error) => {
        res.send("No hay pedidos entregados");
        res.end();
    });
};
exports.obtenerPedidosEntregados = obtenerPedidosEntregados;
