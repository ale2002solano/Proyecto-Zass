import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import {Database} from './utils/database';

dotenv.config();
const app: Express = express();
const port: string | undefined = process.env.PORT;
const database:Database = new Database();

app.use(express.json);

app.get('/', (req: Request, res: Response) => {
    res.send('Backend zass');
});

app.listen(port, ()=>{
    console.log(`[server]: Server zass is running at http://localhost:${port}`);
});