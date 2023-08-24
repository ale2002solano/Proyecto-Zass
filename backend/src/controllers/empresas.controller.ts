import mongoose from "mongoose";
import { Request, Response } from "express";

export const guardarEmpresas = (req:Request, res:Response) => {
    res.send('guardar Empresas');
    res.end();
}

export const obtenerEmpresas = (req:Request, res:Response) => {
    res.send('obtener Empresas');
    res.end();
}

export const actualizarEmpresa = (req:Request, res:Response) => {
    res.send('obtener Actualizar');
    res.end();
}

export const eliminarEmpresa = (req:Request, res:Response) => {
    res.send('eliminar Empresa');
    res.end();
}