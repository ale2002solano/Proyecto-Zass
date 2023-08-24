import mongoose from "mongoose";
import { Pedido, Estado } from "./pedidos.model";
import { Producto } from "./productos.model";

const schema = new mongoose.Schema<Pedido>({
    idPedido: String,
    nombreCliente: String,
    pedido: Array<Producto>,
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

export const PedidoSchema = mongoose.model('pedidos', schema);