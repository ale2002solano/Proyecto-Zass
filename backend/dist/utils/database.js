"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const server = 'localhost';
const port = '27017';
const bd = 'zass';
const bdMongoAtlas = 'mongodb+srv://user-zass:Zass1234@cluster0.qg8loaa.mongodb.net/zass';
class Database {
    constructor() {
        this.conectar();
    }
    conectar() {
        mongoose_1.default.connect(bdMongoAtlas)
            .then(() => {
            console.log('Se conecto a mongo');
        }).catch((error) => {
            console.error('Ocurrio un error al conectarse', error);
        });
    }
}
exports.Database = Database;
exports.default = Database;
