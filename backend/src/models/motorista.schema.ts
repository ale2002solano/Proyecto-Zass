import mongoose from "mongoose";
import { Motorista } from "./motorista.model";

const schema = new mongoose.Schema<Motorista>({
    id: String,
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String
});

export const MotoristaSchema = mongoose.model('motoristas', schema);