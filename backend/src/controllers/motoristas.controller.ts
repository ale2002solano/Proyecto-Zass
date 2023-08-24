import mongoose from "mongoose";
import { Request, Response } from "express";

export const loginMotorista = (req:Request, res:Response) => {
    res.send('login Motorista');
    res.end();
}

export const registroMotorista = (req:Request, res:Response) => {
    res.send('registro Motorista');
    res.end();
}

export const agregarMotorista = (req:Request, res:Response) => {
    res.send('agregar Motorista');
    res.end();
}

export const eliminarMotorista = (req:Request, res:Response) => {
    res.send('eliminar Motorista');
    res.end();
}

export const obtenerMotorista = (req:Request, res:Response) => {
    res.send('obtener Motorista');
    res.end();
}
