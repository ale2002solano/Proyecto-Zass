import mongoose from "mongoose";
import { Request, Response } from "express";
import { MotoristaSchema } from "../models/motorista.schema";

export const loginMotorista = async (req:Request, res:Response) => {
    const motorista = await MotoristaSchema.findOne({correo: req.body.correo, contrasena: req.body.contrasena}, {contrasena: false});
    if (motorista) {
        res.send({status: true, message: 'Login correcto', motorista});
        res.end();
    }
    else{
        res.send({status: false, message: 'Login incorrecto'});
        res.end();
    }
}

export const registroMotorista = (req:Request, res:Response) => {
    if(req.body.contrasena == req.body.contrasenaVerificar){
        let motorista = new MotoristaSchema(req.body);
        motorista.save()
        .then((result)=>{
            res.send({status: true, message: 'Motorista agregado', result});
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

export const agregarMotorista = (req:Request, res:Response) => {
    let motorista = new MotoristaSchema(req.body);
    motorista.save()
    .then((result)=>{
        res.send({status: true, message: 'Motorista agregado', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
}

export const eliminarMotorista = (req:Request, res:Response) => {    
    MotoristaSchema.deleteOne({id: req.params.id})
    .then((result)=>{
        res.send({status: true, message: 'Motorista eliminado', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
}

export const obtenerMotorista = (req:Request, res:Response) => {
    MotoristaSchema.find()
    .then((result)=>{
        res.send({status: true, message: 'Motoristas obtenidos', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
}
