import mongoose from "mongoose";
import { Request, Response } from "express";
import { UsuarioSchema } from "../models/usuarios.schema";


export const loginUsuario = async (req:Request, res:Response) => {
    const usuario = await UsuarioSchema.findOne({correo: req.body.correo, contrasena: req.body.contrasena}, {contrasena: false});
    if (usuario) {
        res.send({status: true, message: 'Login correcto', usuario});
    }
    else 
        res.send({status: false, message: 'Login incorrecto'});
        res.end();
}


export const registrarUsuarios = (req:Request, res:Response) => {
    res.send('registro usuario');
    res.end();
}

export const actualizarUsuario = (req:Request, res:Response) => {
    UsuarioSchema.updateOne({id: req.params.id},
        {
            id: req.body.id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            contrasena: req.body.contrasena,
            direccion: req.body.direccion
        }
    ).then((result)=>{
        res.send({status: true, message: 'Direccion agregada', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
}