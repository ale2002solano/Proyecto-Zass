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
exports.actualizarUsuario = exports.obtenerUsuarios = exports.registrarUsuarios = exports.loginUsuario = void 0;
const usuarios_schema_1 = require("../models/usuarios.schema");
const loginUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuarios_schema_1.UsuarioSchema.findOne({ correo: req.body.correo, contrasena: req.body.contrasena }, { contrasena: false });
    if (usuario) {
        res.send({ status: true, message: 'Login correcto', usuario });
        res.end();
    }
    else {
        res.send({ status: false, message: 'Login incorrecto' });
        res.end();
    }
});
exports.loginUsuario = loginUsuario;
const registrarUsuarios = (req, res) => {
    if (req.body.contrasena == req.body.contrasenaVerificar) {
        let usuario = new usuarios_schema_1.UsuarioSchema(req.body);
        usuario.save()
            .then((result) => {
            res.send({ status: true, message: 'Usuario agregado', result });
            res.end();
        }).catch((error) => {
            res.send(error);
            res.end();
        });
    }
    else {
        res.send(false);
        res.end();
    }
};
exports.registrarUsuarios = registrarUsuarios;
const obtenerUsuarios = (req, res) => {
    usuarios_schema_1.UsuarioSchema.find()
        .then((result) => {
        res.send({ status: true, message: 'Todos los usuarios obtenidos', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerUsuarios = obtenerUsuarios;
const actualizarUsuario = (req, res) => {
    usuarios_schema_1.UsuarioSchema.updateOne({ id: req.params.id }, {
        direccion: req.body.direccion
    }).then(result => {
        res.send({ message: 'Usuario actualizado', result });
        res.end();
    }).catch(error => {
        res.send({ message: 'Ocurrio un error', error });
        res.end();
    });
};
exports.actualizarUsuario = actualizarUsuario;
