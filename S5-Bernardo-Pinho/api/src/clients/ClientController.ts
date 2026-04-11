import type { Request, Response } from "express";
import { ClientService } from "./ClientService"

class ClientController {
    async createClient(req:Request, res:Response) {
        try {
            const {name, phone, email}= req.body;

            const client= new ClientService();
            const cliente = await client.createClient({name, phone, email});

            return res.status(201).json(cliente); 
        } catch (error: any) {
            return res.status(400).json({error: error.message});
        }
    }

    async getAllClients(req:Request, res:Response) {
        const client= new ClientService();
        const cliente = await client.getAllClients();
        
        return res.status(200).json(cliente);
    }

    async getClientById(req:Request, res:Response) {
        try {
            const id = Number(req.params.id);

            const client = new ClientService();
            const cliente= await client.getClientById(id);

            return res.status(200).json(cliente);
        } catch(error: any) {
            return res.status(404).json({erro: error.message});
        }
    }

    async ClientDelete(req:Request, res:Response) {
        try {
            const id= Number(req.params.id);

            const client= new ClientService();
            const cliente= await client.ClientDelete(id);

            return res.status(204).send();
        } catch (error:any) {
            return res.status(404).json({erro: error.message});
        }
    }
}
export {ClientController};