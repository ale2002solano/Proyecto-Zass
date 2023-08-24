import mongoose from "mongoose";
import { Categoria } from "./categorias.model";
import { Producto } from "./productos.model";

const schema = new mongoose.Schema<Categoria>({
    idCategoria: String,
    tipo: String,
    nombreCategoria: String,
    detalleProductos: Array<Producto>
});

export const CategoriaSchema = mongoose.model('categorias', schema);