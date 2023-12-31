"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    idCategoria: String,
    tipo: String,
    nombreCategoria: String,
    imagen: String,
    detalleProductos: (Array)
});
exports.CategoriaSchema = mongoose_1.default.model('categorias', schema);
