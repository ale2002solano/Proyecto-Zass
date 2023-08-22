import mongoose from "mongoose";

export interface Empresa {
    _id?: mongoose.Types.ObjectId;
    idEmpresa: number;
    nombre: string;
    imagen: string;
    calificacion: string;
}