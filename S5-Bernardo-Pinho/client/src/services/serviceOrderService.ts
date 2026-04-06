import { api } from "./api";
import type { Service, CreateServicePropsData } from "../types";

export async function getAll(): Promise<Service[]> {
    const response = await api.get<Service[]>('/tarefas');
    return response.data
}

export async function createService(data: CreateServicePropsData): Promise<Service> {
    const response = await api.post<Service>('/tarefas', data);
    return response.data
}

export async function tarefaDelete(id:number) : Promise<void> {
    await api.delete(`/tarefas/${id}`);
}