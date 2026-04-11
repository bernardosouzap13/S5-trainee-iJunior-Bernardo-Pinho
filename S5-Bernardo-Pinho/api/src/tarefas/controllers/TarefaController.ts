import type { Request, Response } from "express";
import { TarefaService } from "../services/TarefaService";

class TarefaController {
    async createService(req: Request, res: Response) {
        try {
            const { clientId, device, issue, status } = req.body;

            const service = new TarefaService();
            const tarefa = await service.createService({ clientId: Number(clientId), device, issue, status });

            return res.status(201).json(tarefa);
        } catch (error: any) {
            return res.status(400).json({ erro: error.message });
        }
    }

    async getAll(req: Request, res: Response) {
        const service = new TarefaService();
        const tarefas = await service.getAll();
        return res.status(200).json(tarefas);
    }

    async getById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            const service = new TarefaService();
            const tarefa = await service.getById(id);

            return res.status(200).json(tarefa);
        } catch (error: any) {
            return res.status(404).json({ erro: error.message });
        }
    }

    async atualizarTarefa(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const { issue, status, device } = req.body;

            const service = new TarefaService();
            const tarefa = await service.atualizarTarefa(id, issue, status, device);

            return res.status(200).json(tarefa);
        } catch (error: any) {
            return res.status(404).json({ erro: error.message });
        }
    }
    
    async tarefaDelete(req:Request, res:Response) {
        try {
            const id = Number(req.params.id);

            const service = new TarefaService();
            await service.tarefaDelete(id);

            return res.status(204).send();
        } catch (error: any) {
            return res.status(404).json({ erro: error.message });
        }
    }

}

export {TarefaController};