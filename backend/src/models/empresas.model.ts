import mongoose from "mongoose";

export interface Empresa {
    _id?: mongoose.Types.ObjectId;
    idEmpresa: string;
    nombre: string;
    imagen: string;
    calificacion: string;
}