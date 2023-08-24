import mongoose from "mongoose";
import { Request, Response } from "express";
import { EmpresaSchema } from "../models/empresas.schema";

export const guardarEmpresas = (req:Request, res:Response) => {
    let empresa = new EmpresaSchema(req.body);
    empresa.save()
    .then((result)=>{
        res.send({status: true, message: 'Empresa agregada', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
}

export const obtenerEmpresas = (req:Request, res:Response) => {
    EmpresaSchema.find()
    .then(resultado=>{
        res.send({status: true, message: 'Empresas obtenidas con exito', resultado});
        res.end();
    })
    .catch(error=>{
        res.send({status: false, message: 'Empresas no encontradas', error});
        res.end();
    })
    
}

export const actualizarEmpresa = (req:Request, res:Response) => {
    EmpresaSchema.updateOne({Number(idEmpresa): req.params.id},req.body
    ).then(result => {
        res.send({message: 'Usuario actualizado', result});
        res.end();
    }).catch(error => {
        res.send({message: 'Ocurrio un error', error});
        res.end();
    })
}

export const eliminarEmpresa = (req:Request, res:Response) => {
    EmpresaSchema.deleteOne({idEmpresa: req.params.id})
    .then((result)=>{
        res.send({status: true, message: 'Empresa eliminada', result});
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
}