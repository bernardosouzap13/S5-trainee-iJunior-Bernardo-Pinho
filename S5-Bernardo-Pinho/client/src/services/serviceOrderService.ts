import { api } from "./api";
import type { Service, CreateServicePropsData } from "../types";

export async function getAllServices(): Promise<Service[]> {
    const response = await api.get<{ data: Service[] }>('/service-orders');
    return response.data.data
}

export async function createService(data: CreateServicePropsData): Promise<Service> {
    const response = await api.post<Service>('/service-orders', data);
    return response.data
}

export async function deleteService(id:number) : Promise<void> {
    await api.delete(`/service-orders/${id}`);
}