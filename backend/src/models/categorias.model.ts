import mongoose from "mongoose";
import { Producto } from "./productos.model";

export interface Categoria {
    _id?: mongoose.Types.ObjectId;
    idCategoria: string;
    tipo?: string;
    nombreCategoria: string;
    detalleProductos?: Array<Producto>;
}