import mongoose from 'mongoose';
const server:string = 'localhost';
const port:string = '27017';
const bd:string = 'zass';
const bdMongoAtlas:string = 'mongodb+srv://user-zass:Zass1234@cluster0.qg8loaa.mongodb.net/zass';

export class Database {
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(bdMongoAtlas)
        .then(()=>{
            console.log('Se conecto a mongo');
        }).catch((error)=>{
            console.error('Ocurrio un error al conectarse', error);
        });
    }
}

export default Database;