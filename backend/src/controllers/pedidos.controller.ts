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
    PedidoSchema.findOne({idPedido: req.params.id},{cantidad: false})
    .then((result)=>{
        res.send({status: true, message: 'Pedido obtenido', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
}

export const obtenerPedidos = (req:Request, res:Response) => {
    PedidoSchema.find({},{cantidad: false})
.then((result)=>{
    res.send({status: true, message: 'Pedidos obtenidos', result});
    res.end();
}).catch((error)=>{
    res.send("No encontrados");
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

export const actualizarPedido = (req:Request, res:Response) => {
    PedidoSchema.updateOne({idPedido: req.params.id},req.body
    ).then(result => {
        res.send({message: 'Pedido actualizado', result});
        res.end();
    }).catch(error => {
        res.send({message: 'Ocurrio un error', error});
        res.end();
    })
}