import mongoose from "mongoose";
import { Request, Response } from "express";

export const agregarPedido = (req:Request, res:Response) => {
    res.send('agregar Pedido');
    res.end();
}

export const obtenerPedidosConDireccion = (req:Request, res:Response) => {
    res.send('obtener Pedidos Con Direccion');
    res.end();
}

export const obtenerPedidosDisponibles = (req:Request, res:Response) => {
    res.send('obtener Pedidos Disponibles');
    res.end();
}

export const obtenerPedidosPendientes = (req:Request, res:Response) => {
    res.send('obtener Pedidos Pendientes');
    res.end();
}

export const obtenerPedidosEntregados = (req:Request, res:Response) => {
    res.send('obtener Pedidos Entregados');
    res.end();
}