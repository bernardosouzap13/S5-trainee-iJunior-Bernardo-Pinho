import { Router } from "express";
import { ClientController } from "./ClientController";
import { authMiddleware } from "../middlewares/authMiddleware";

const clientRoutes = Router();
const controller= new ClientController();

clientRoutes.use(authMiddleware)

clientRoutes.post('/', controller.createClient);

clientRoutes.get('/', controller.getAllClients);

clientRoutes.get('/:id', controller.getClientById);

clientRoutes.delete('/:id', controller.ClientDelete);

export {clientRoutes};