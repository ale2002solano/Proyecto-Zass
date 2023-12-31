import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import {Database} from './utils/database';
import cors from 'cors'
import usuariosRouter from './routers/usuarios.router';
import empresasRouter from './routers/empresas.router';
import motoristasRouter from './routers/motoristas.router';
import pedidosRouter from './routers/pedidos.router';
import productosRouter from './routers/productos.router';
import categoriasRouter from './routers/categorias.router'

/**
 * Para compilar: npx tsc --watch
 * nodemon dist/index.js en otra terminal
 */
dotenv.config();

const app: Express = express();
const port = 8088;
const database = new Database();

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

app.use('/usuarios', usuariosRouter);
app.use('/motoristas', motoristasRouter);
app.use('/empresas', empresasRouter);
app.use('/pedidos', pedidosRouter);
app.use('/productos', productosRouter);
app.use('/categorias', categoriasRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Servidor zass');
});

app.listen(port, () => {
    console.log(`[server]: Server zass is running at http://localhost:${port}`);
});