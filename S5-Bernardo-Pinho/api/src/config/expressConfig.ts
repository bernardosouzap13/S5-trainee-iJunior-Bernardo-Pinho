import 'dotenv/config'
import express from "express";
import cookieParser from 'cookie-parser';
import cors from 'cors'
import { tarefaRoutes } from "../tarefas/routes/TarefaRoutes"
import { authRoutes } from '../domains/auth/auth.router';
import { clientRoutes } from '../clients/ClientRoutes';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
}))

app.use('/tarefas', tarefaRoutes);
app.use('/auth', authRoutes)
app.use('/clients', clientRoutes);

export{app};