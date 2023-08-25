"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarProducto = exports.guardarProducto = exports.actualizarProductoCantidad = exports.actualizarProducto = exports.obtenerProductosPorCategoria = exports.obtenerProducto = exports.obtenerProductos = void 0;
const productos_schema_1 = require("../models/productos.schema");
const obtenerProductos = (req, res) => {
    productos_schema_1.ProductoSchema.find()
        .then(resultado => {
        res.send({ status: true, message: 'Productos obtenidos con exito', resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: 'Productos no encontrados', error });
        res.end();
    });
};
exports.obtenerProductos = obtenerProductos;
const obtenerProducto = (req, res) => {
    productos_schema_1.ProductoSchema.findOne({ idProductos: req.params.id })
        .then(resultado => {
        res.send({ status: true, message: 'Producto obtenidos con exito', resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: 'Producto no encontrado', error });
        res.end();
    });
};
exports.obtenerProducto = obtenerProducto;
const obtenerProductosPorCategoria = (req, res) => {
    productos_schema_1.ProductoSchema.find({ idCategoria: req.params.id }, { cantidad: false })
        .then(resultado => {
        res.send({ status: true, message: 'Productos obtenidos con exito', resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: 'Productos no encontrados', error });
        res.end();
    });
};
exports.obtenerProductosPorCategoria = obtenerProductosPorCategoria;
const actualizarProducto = (req, res) => {
    productos_schema_1.ProductoSchema.updateOne({}, req.body
    //req.body
    ).then((result) => {
        res.send({ status: true, message: 'Cantidad agregada', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.actualizarProducto = actualizarProducto;
const actualizarProductoCantidad = (req, res) => {
    productos_schema_1.ProductoSchema.updateOne({ idProductos: req.params.id }, req.body).then((result) => {
        res.send({ status: true, message: 'Cantidad agregada', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.actualizarProductoCantidad = actualizarProductoCantidad;
const guardarProducto = (req, res) => {
    let producto = new productos_schema_1.ProductoSchema(req.body);
    producto.save()
        .then((result) => {
        res.send({ status: true, message: 'Producto agregado', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.guardarProducto = guardarProducto;
const eliminarProducto = (req, res) => {
    productos_schema_1.ProductoSchema.deleteOne({ idProductos: req.params.id })
        .then((result) => {
        res.send({ status: true, message: 'Producto eliminado', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.eliminarProducto = eliminarProducto;
