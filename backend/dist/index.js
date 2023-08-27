"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./utils/database");
const cors_1 = __importDefault(require("cors"));
const usuarios_router_1 = __importDefault(require("./routers/usuarios.router"));
const empresas_router_1 = __importDefault(require("./routers/empresas.router"));
const motoristas_router_1 = __importDefault(require("./routers/motoristas.router"));
const pedidos_router_1 = __importDefault(require("./routers/pedidos.router"));
const productos_router_1 = __importDefault(require("./routers/productos.router"));
const categorias_router_1 = __importDefault(require("./routers/categorias.router"));
/**
 * Para compilar: npx tsc --watch
 * nodemon dist/index.js en otra terminal
 */
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8088;
const database = new database_1.Database();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/usuarios', usuarios_router_1.default);
app.use('/motoristas', motoristas_router_1.default);
app.use('/empresas', empresas_router_1.default);
app.use('/pedidos', pedidos_router_1.default);
app.use('/productos', productos_router_1.default);
app.use('/categorias', categorias_router_1.default);
app.get('/', (req, res) => {
    res.send('Servidor zass');
});
app.listen(port, () => {
    console.log(`[server]: Server zass is running at http://localhost:${port}`);
});
