import mongoose from "mongoose";
import { Request, Response } from "express";

export const obtenerCategorias = (req:Request, res:Response) => {
    res.send('obtener Categorias');
    res.end();
}