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
exports.actualizarUsuario = exports.registrarUsuarios = exports.loginUsuario = void 0;
const usuarios_schema_1 = require("../models/usuarios.schema");
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuarios_schema_1.UsuarioSchema.findOne({ correo: req.body.correo, contrasena: req.body.contrasena }, { contrasena: false });
    if (usuario) {
        res.send({ status: true, message: 'Login correcto', usuario });
    }
    else
        res.send({ status: false, message: 'Login incorrecto' });
    res.end();
});
exports.loginUsuario = loginUsuario;
const registrarUsuarios = (req, res) => {
    res.send('registro usuario');
    res.end();
};
exports.registrarUsuarios = registrarUsuarios;
const actualizarUsuario = (req, res) => {
    usuarios_schema_1.UsuarioSchema.updateOne({ id: req.params.id }, {
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        direccion: req.body.direccion
    }).then((result) => {
        res.send({ status: true, message: 'Direccion agregada', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.actualizarUsuario = actualizarUsuario;
