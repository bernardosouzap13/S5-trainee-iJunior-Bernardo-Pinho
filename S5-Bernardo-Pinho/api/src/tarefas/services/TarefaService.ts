import { prisma } from "../../config/prismaClient";

interface CreateTarefaData {
    clientId: number;
    device: string;
    issue: string;
    status: string;
}

class TarefaService {
    async createService(data: CreateTarefaData) {
        if (!data.issue || !data.device || !data.clientId) {
            throw new Error("Campos obrigatórios faltando");
        }

        return prisma.task.create({ data });
    }

    async getAll() {
        return prisma.task.findMany();
    }

    async getById(id: number) {
        const tarefa = await prisma.task.findUnique({ where: { id } });

        if (!tarefa) {
            throw new Error("Tarefa não encontrada");
        }

        return tarefa;
    }

    async atualizarTarefa(id: number, issue?: string, status?: string, device?: string) {
        const tarefa = await prisma.task.findUnique({ where: { id } });

        if (!tarefa) {
            throw new Error("Tarefa não encontrada");
        }

        const data: any = {};
        if (issue !== undefined) data.issue = issue;
        if (status !== undefined) data.status = status;
        if (device !== undefined) data.device = device;

        return prisma.task.update({ where: { id }, data });
    }

    async tarefaDelete(id: number) {
        const tarefa = await prisma.task.findUnique({ where: { id } });

        if (!tarefa) {
            throw new Error("Tarefa não encontrada");
        }

        await prisma.task.delete({ where: { id } });
    }
}

export { TarefaService };