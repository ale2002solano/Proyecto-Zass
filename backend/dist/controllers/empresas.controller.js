"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarEmpresa = exports.actualizarEmpresa = exports.obtenerEmpresas = exports.guardarEmpresas = void 0;
const guardarEmpresas = (req, res) => {
    res.send('guardar Empresas');
    res.end();
};
exports.guardarEmpresas = guardarEmpresas;
const obtenerEmpresas = (req, res) => {
    res.send('obtener Empresas');
    res.end();
};
exports.obtenerEmpresas = obtenerEmpresas;
const actualizarEmpresa = (req, res) => {
    res.send('obtener Actualizar');
    res.end();
};
exports.actualizarEmpresa = actualizarEmpresa;
const eliminarEmpresa = (req, res) => {
    res.send('eliminar Empresa');
    res.end();
};
exports.eliminarEmpresa = eliminarEmpresa;
