import mongoose from "mongoose";

export interface Pedido {
    _id?: mongoose.Types.ObjectId;
    idPedido: number;
    pedido: Array<PedidoCantidad>;
}

export interface PedidoCantidad {
    idProducto: string;
    cantidad: number;
}