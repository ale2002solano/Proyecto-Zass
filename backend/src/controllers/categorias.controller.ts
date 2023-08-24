import mongoose from "mongoose";
import { Request, Response } from "express";
import { CategoriaSchema } from "../models/categorias.schema";

export const obtenerCategorias = (req:Request, res:Response) => {
    CategoriaSchema.find({tipo: "producto"})
    .then((result)=>{
        res.send({status: true, message: 'Todos las categorias obtenidas', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
}

export const obtenerCategoriasPedidos = (req:Request, res:Response) => {
    CategoriaSchema.find({tipo: "pedido"})
    .then((result)=>{
        res.send({status: true, message: 'Todos las categorias de pedidos obtenidas', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
}
