"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    idPedido: String,
    nombreCliente: String,
    pedido: (Array),
    impuesto: String,
    total: String,
    fecha: String,
    establecimiento: String,
    direccion: String,
    motorista: String,
    estadoOrden: {
        type: String,
        required: true
    }
});
exports.PedidoSchema = mongoose_1.default.model('pedidos', schema);
