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
exports.obtenerMotorista = exports.eliminarMotorista = exports.agregarMotorista = exports.registroMotorista = exports.loginMotorista = void 0;
const motorista_schema_1 = require("../models/motorista.schema");
const loginMotorista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const motorista = yield motorista_schema_1.MotoristaSchema.findOne({ correo: req.body.correo, contrasena: req.body.contrasena }, { contrasena: false });
    if (motorista) {
        res.send({ status: true, message: 'Login correcto', motorista });
        res.end();
    }
    else {
        res.send({ status: false, message: 'Login incorrecto' });
        res.end();
    }
});
exports.loginMotorista = loginMotorista;
const registroMotorista = (req, res) => {
    if (req.body.contrasena == req.body.contrasenaVerificar) {
        let motorista = new motorista_schema_1.MotoristaSchema(req.body);
        motorista.save()
            .then((result) => {
            res.send({ status: true, message: 'Motorista agregado', result });
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
exports.registroMotorista = registroMotorista;
const agregarMotorista = (req, res) => {
    let motorista = new motorista_schema_1.MotoristaSchema(req.body);
    motorista.save()
        .then((result) => {
        res.send({ status: true, message: 'Motorista agregado', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.agregarMotorista = agregarMotorista;
const eliminarMotorista = (req, res) => {
    motorista_schema_1.MotoristaSchema.deleteOne({ id: req.params.id })
        .then((result) => {
        res.send({ status: true, message: 'Motorista eliminado', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.eliminarMotorista = eliminarMotorista;
const obtenerMotorista = (req, res) => {
    motorista_schema_1.MotoristaSchema.find()
        .then((result) => {
        res.send({ status: true, message: 'Motoristas obtenidos', result });
        res.end();
    }).catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerMotorista = obtenerMotorista;
