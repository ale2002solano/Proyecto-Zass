import mongoose from "mongoose";
import { Request, Response } from "express";
import { UsuarioSchema } from "../models/usuarios.schema";


export const loginUsuario = async (req:Request, res:Response) => {
    const usuario = await UsuarioSchema.findOne({correo: req.body.correo, contrasena: req.body.contrasena}, {contrasena: false});
    if (usuario) {
        res.send({status: true, message: 'Login correcto', usuario});
        res.end();
    }
    else{
        res.send({status: false, message: 'Login incorrecto'});
        res.end();
    }
}


export const registrarUsuarios = (req:Request, res:Response) => {
    if(req.body.contrasena == req.body.contrasenaVerificar){
        let usuario = new UsuarioSchema(req.body);
        usuario.save()
        .then((result)=>{
            res.send({status: true, message: 'Usuario agregado', result});
            res.end();
        }).catch((error)=>{
            res.send(error);
            res.end();
        })
    }else{
        res.send("Contraseñas no coinciden");
        res.end();
    }
}


export const actualizarUsuario = (req:Request, res:Response) => {
    UsuarioSchema.updateOne({id: req.params.id},
        {
            direccion: req.body.direccion
        }
    ).then(result => {
        res.send({message: 'Usuario actualizado', result});
        res.end();
    }).catch(error => {
        res.send({message: 'Ocurrio un error', error});
        res.end();
    })
}