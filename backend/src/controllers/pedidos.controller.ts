import mongoose from "mongoose";
import { Request, Response } from "express";
import { PedidoSchema } from "../models/pedidos.schema";

export const agregarPedido = (req:Request, res:Response) => {
    let pedido = new PedidoSchema(req.body);
    pedido.save()
    .then((result)=>{
        res.send({status: true, message: 'Pedido agregado', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
}

export const obtenerPedido = async (req:Request, res:Response) => {
    PedidoSchema.findOne({Number(id): req.body.id})
    .then((result)=>{
        res.send({status: true, message: 'Pedido obtenido', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
}

export const obtenerPedidosDisponibles = (req:Request, res:Response) => {
        PedidoSchema.find({estadoOrden: "disponible"})
    .then((result)=>{
        res.send({status: true, message: 'Pedido disponible obtenido', result});
        res.end();
    }).catch((error)=>{
        res.send("No hay pedidos disponibles");
        res.end();
    })
}

export const obtenerPedidosPendientes = (req:Request, res:Response) => {
    PedidoSchema.find({estadoOrden: "pendiente"})
    .then((result)=>{
        res.send({status: true, message: 'Pedido pendiente obtenido', result});
        res.end();
    }).catch((error)=>{
        res.send("No hay pedidos disponibles");
        res.end();
    })
}

export const obtenerPedidosEntregados = (req:Request, res:Response) => {
    PedidoSchema.find({estadoOrden: "entregado"})
    .then((result)=>{
        res.send({status: true, message: 'Pedido entregado obtenido', result});
        res.end();
    }).catch((error)=>{
        res.send("No hay pedidos entregados");
        res.end();
    })
}