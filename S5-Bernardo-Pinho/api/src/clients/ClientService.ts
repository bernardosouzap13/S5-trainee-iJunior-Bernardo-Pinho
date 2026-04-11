import { prisma } from "../config/prismaClient";

interface CreateClientData {
    name: string;
    phone: string;
    email: string;
}

class ClientService {
    async createClient(data: CreateClientData) {
        if (!data.name || !data.phone || !data.email) {
            throw new Error("Campos obrigatórios faltando");
        }

        return prisma.client.create({data});
    }

    async getAllClients() {
        return prisma.client.findMany();
    }

    async getClientById(id:number) {
        const client= await prisma.client.findUnique({where:{id}});

        if (!client) {
            throw new Error("Cliente não encontrado");
        } 

        return client;
    }

    async ClientDelete(id:number) {
        const client = await prisma.client.findUnique({where: {id}});

        if(!client) {
            throw new Error("Cliente não encontrado");
        }

        await prisma.client.delete({where:{id}});
    }
}
export {ClientService}