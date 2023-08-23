import mongoose from "mongoose";

export interface Productos {
    _id?: mongoose.Types.ObjectId;
    idProductos:String;
    img: string;
    nombreProducto: string;
    precio: string;
}
