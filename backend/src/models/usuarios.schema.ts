import mongoose from "mongoose";
import { Usuario } from "./usuarios.model";

const schema = new mongoose.Schema<Usuario>({
    id: String,
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String,
    direccion: String
});

export const UsuarioSchema = mongoose.model('usuarios', schema);