"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoristaSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    id: Number,
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String
});
exports.MotoristaSchema = mongoose_1.default.model('motoristas', schema);
