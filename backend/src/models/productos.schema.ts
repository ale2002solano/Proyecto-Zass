import mongoose from "mongoose";
import { Producto } from "./productos.model";

const schema = new mongoose.Schema<Producto>({
    idProductos:String,
    img: String,
    idCategoria: String,
    nombreProducto: String,
    precio: String
});

export const ProductoSchema = mongoose.model('productos', schema);