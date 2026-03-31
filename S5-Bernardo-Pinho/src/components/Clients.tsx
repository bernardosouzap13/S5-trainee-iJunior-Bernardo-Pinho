import { useEffect, useState } from "react";
import {getAllClients, deleteClient, createClient} from '../services/clientService';
import type { Client } from "../types";

const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function load() {
        const data = await getAllClients();
        setClients(data);
    }
    load();
  }, []);

  async function handleCreate() {
    if (!name || !phone || !email) return;
    const novo = await createClient({ name, phone, email });
    setClients(prev => [...prev, novo]);
    setName('');
    setPhone('');
    setEmail('');
  }
  
  async function handleDelete(id:number) {
    await deleteClient(id);
    setClients(prev => prev.filter(c => c.id !== id));
  }
  
  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
        <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <button onClick={handleCreate}>Adicionar Cliente</button>
      </div>
      <ul className="mt-6">
        {clients.map(client => (
            <li key={client.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md mt-2">
                <span>
                  {client.name} 
                  (ID: {client.id})
                </span>
                <button onClick={() => handleDelete(client.id)} className="px-4 py-2 bg-red-500 text-white rounded">Excluir</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Clients