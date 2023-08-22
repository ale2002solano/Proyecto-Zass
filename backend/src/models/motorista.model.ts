import mongoose from "mongoose";

export interface Motorista {
    _id?: mongoose.Types.ObjectId;
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
}