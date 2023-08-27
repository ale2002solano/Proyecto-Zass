"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarEmpresa = exports.actualizarEmpresa = exports.obtenerEmpresas = exports.guardarEmpresas = void 0;
const empresas_schema_1 = require("../models/empresas.schema");
const guardarEmpresas = (req, res) => {
    let empresa = new empresas_schema_1.EmpresaSchema(req.body);
    empresa.save()
        .then((result) => {
        res.send({ status: true, message: 'Empresa agregada', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.guardarEmpresas = guardarEmpresas;
const obtenerEmpresas = (req, res) => {
    empresas_schema_1.EmpresaSchema.find()
        .then(resultado => {
        res.send({ status: true, message: 'Empresas obtenidas con exito', resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: 'Empresas no encontradas', error });
        res.end();
    });
};
exports.obtenerEmpresas = obtenerEmpresas;
const actualizarEmpresa = (req, res) => {
    empresas_schema_1.EmpresaSchema.updateOne({}, req.body).then(result => {
        res.send({ message: 'Empresa actualizado', result });
        res.end();
    }).catch(error => {
        res.send({ message: 'Ocurrio un error', error });
        res.end();
    });
};
exports.actualizarEmpresa = actualizarEmpresa;
const eliminarEmpresa = (req, res) => {
    empresas_schema_1.EmpresaSchema.deleteOne({ idEmpresa: req.params.id })
        .then((result) => {
        res.send({ status: true, message: 'Empresa eliminada', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.eliminarEmpresa = eliminarEmpresa;
