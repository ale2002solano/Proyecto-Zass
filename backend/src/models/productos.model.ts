import mongoose from "mongoose";

export interface Producto {
    _id?: mongoose.Types.ObjectId;
    idProductos: string;
    idCategoria: string;
    img: string;
    nombreProducto: string;
    precio: string;
    cantidad?: string;
}
