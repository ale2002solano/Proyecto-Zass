import mongoose from "mongoose";
import { Request, Response } from "express";
import { ProductoSchema } from "../models/productos.schema";

export const obtenerProductos = (req:Request, res:Response) => {
    ProductoSchema.find()
    .then(resultado=>{
        res.send({status: true, message: 'Productos obtenidos con exito', resultado});
        res.end();
    })
    .catch(error=>{
        res.send({status: false, message: 'Productos no encontrados', error});
        res.end();
    })
}

export const obtenerProducto = (req:Request, res:Response) => {
    ProductoSchema.findOne({idProductos: req.params.id})
    .then(resultado=>{
        res.send({status: true, message: 'Producto obtenidos con exito', resultado});
        res.end();
    })
    .catch(error=>{
        res.send({status: false, message: 'Producto no encontrado', error});
        res.end();
    })
}

export const actualizarProducto = (req:Request, res:Response) => {
    ProductoSchema.updateOne({idProductos: req.params.id},
        {
            _id: new mongoose.Types.ObjectId(req.params._id),
            idProductos: req.body.idProductos,
            img: req.body.img,
            idCategoria: req.body.idCategoria,
            nombreProducto: req.body.nombreProducto,
            precio: req.body.precio
        }
    ).then((result)=>{
        res.send({status: true, message: 'Direccion agregada', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
}

export const guardarProducto = (req:Request, res:Response) => {
    let producto = new ProductoSchema(req.body);
    producto.save()
    .then((result)=>{
        res.send({status: true, message: 'Producto agregado', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
}

export const eliminarProducto = (req:Request, res:Response) => {
    ProductoSchema.deleteOne({idProductos: req.params.id})
    .then((result)=>{
        res.send({status: true, message: 'Producto eliminado', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
}
