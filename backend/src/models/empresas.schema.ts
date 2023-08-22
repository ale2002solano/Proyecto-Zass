import mongoose from "mongoose";
import { Empresa } from "./empresas.model";

const schema = new mongoose.Schema<Empresa>({
    idEmpresa: Number,
    nombre: String,
    imagen: String,
    calificacion: String
});

export const EmpresaSchema = mongoose.model('empresas', schema);