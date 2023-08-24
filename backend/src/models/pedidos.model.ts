import mongoose from "mongoose";
import { Producto } from "./productos.model";

export type Estado = "disponible" | "entegado" | "pendiente";

export interface Pedido {
    idPedido: string;
    nombreCliente: string;
    pedido: Array<Producto>;
    impuesto: string;
    total: string;
    fecha: string;
    establecimiento: string;
    direccion: string;
    motorista: string;
    estadoOrden: Estado;
}

