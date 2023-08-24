"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerCategoriasPedidos = exports.obtenerCategorias = void 0;
const categorias_schema_1 = require("../models/categorias.schema");
const obtenerCategorias = (req, res) => {
    categorias_schema_1.CategoriaSchema.find()
        .then((result) => {
        res.send({ status: true, message: 'Todos las categorias obtenidas', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerCategorias = obtenerCategorias;
const obtenerCategoriasPedidos = (req, res) => {
    categorias_schema_1.CategoriaSchema.find({ tipo: "pedido" })
        .then((result) => {
        res.send({ status: true, message: 'Todos las categorias de pedidos obtenidas', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerCategoriasPedidos = obtenerCategoriasPedidos;
