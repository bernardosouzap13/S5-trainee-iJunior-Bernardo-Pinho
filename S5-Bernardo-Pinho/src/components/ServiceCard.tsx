import {useState} from 'react'
import type { Service } from '../types'

interface Props extends Service {
  onDelete: (id: number) => void
}

const ServiceCard = ({id, device, issue, onDelete}: Props) => {
    const [status, setStatus] = useState<'aberto' | 'finalizado'>('aberto')
    return (
       <div className={`border p-4 rounded-lg shadow-md bg-white py-8 px-4 mt-8 ${
         status === 'aberto' ? 'bg-green-50 border-green-400' : 'bg-gray-100 border-gray-400'}`}>
         <h3 className="font-bold text-lg mt-2">{issue}</h3>
         <p>{device}</p>
         <button onClick={() => setStatus(s => s === 'aberto' ? 'finalizado' : 'aberto')}>
           {status === 'aberto' ? 'Finalizar' : 'Reabrir'}
         </button>
         <button onClick={() => onDelete(id)} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
           Deletar
         </button>
       </div>
  )
}
export default ServiceCard