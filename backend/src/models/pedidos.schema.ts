import mongoose from "mongoose";
import { Pedido, PedidoCantidad } from "./pedidos.model";

const schema = new mongoose.Schema<Pedido>({
    idPedido: Number,
    pedido: Array<PedidoCantidad>
});

export const EmpresaSchema = mongoose.model('pedidos', schema);