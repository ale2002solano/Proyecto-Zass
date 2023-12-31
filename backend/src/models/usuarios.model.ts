import mongoose from "mongoose";

export interface Usuario {
    _id?: mongoose.Types.ObjectId;
    id: string;
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    direccion?: string;
}