import mongoose from "mongoose";
import { Productos } from "./productos.model";

const schema = new mongoose.Schema<Productos>({
    idProductos:String,
    img: String,
    nombreProducto: String,
    precio: String,
});

export const ProductosSchema = mongoose.model('productos', schema);