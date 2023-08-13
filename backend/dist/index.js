"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./utils/database");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const database = new database_1.Database();
app.use(express_1.default.json);
app.get('/', (req, res) => {
    res.send('Backend zass');
});
app.listen(port, () => {
    console.log(`[server]: Server zass is running at http://localhost:${port}`);
});
