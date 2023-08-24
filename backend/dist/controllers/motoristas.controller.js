"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerMotorista = exports.eliminarMotorista = exports.agregarMotorista = exports.registroMotorista = exports.loginMotorista = void 0;
const loginMotorista = (req, res) => {
    res.send('login Motorista');
    res.end();
};
exports.loginMotorista = loginMotorista;
const registroMotorista = (req, res) => {
    res.send('registro Motorista');
    res.end();
};
exports.registroMotorista = registroMotorista;
const agregarMotorista = (req, res) => {
    res.send('agregar Motorista');
    res.end();
};
exports.agregarMotorista = agregarMotorista;
const eliminarMotorista = (req, res) => {
    res.send('eliminar Motorista');
    res.end();
};
exports.eliminarMotorista = eliminarMotorista;
const obtenerMotorista = (req, res) => {
    res.send('obtener Motorista');
    res.end();
};
exports.obtenerMotorista = obtenerMotorista;
