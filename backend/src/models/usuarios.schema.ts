import mongoose from "mongoose";
import { Usuario } from "./usuarios.model";

const schema = new mongoose.Schema<Usuario>({
    id: Number,
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String,
    direccion: String
});

export const EmpresaSchema = mongoose.model('usuarios', schema);