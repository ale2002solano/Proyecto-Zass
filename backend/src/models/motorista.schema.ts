import mongoose from "mongoose";
import { Motorista } from "./motorista.model";

const schema = new mongoose.Schema<Motorista>({
    id: Number,
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String
});

export const EmpresaSchema = mongoose.model('motoristas', schema);