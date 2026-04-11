export interface Service {
  id: number,
  clientId: number,
  device: string,
  issue: string,
  status: string;
  created_at: string
}

export type CreateServicePropsData = Omit<Service, 'id' | 'created_at'>;