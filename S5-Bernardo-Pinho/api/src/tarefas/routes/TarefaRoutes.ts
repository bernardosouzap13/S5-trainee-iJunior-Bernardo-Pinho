import { Router } from "express";
import { TarefaController } from "../controllers/TarefaController";
import { authMiddleware } from "../../middlewares/authMiddleware";

const tarefaRoutes = Router();
const controller = new TarefaController();

tarefaRoutes.use(authMiddleware)

tarefaRoutes.post('/', controller.createService);

tarefaRoutes.get('/', controller.getAll);

tarefaRoutes.get('/:id', controller.getById);

tarefaRoutes.put('/:id', controller.atualizarTarefa);

tarefaRoutes.delete('/:id', controller.tarefaDelete);

export {tarefaRoutes}; 