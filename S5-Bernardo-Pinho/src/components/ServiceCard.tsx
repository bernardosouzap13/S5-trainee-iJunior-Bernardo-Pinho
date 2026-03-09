import {useState} from 'react'

interface ServiceProps {
  titulo: string;
  cliente: string;
  descricao: string;
}

const ServiceCard = ({ titulo, cliente, descricao,}: ServiceProps) => {
    const [status, setStatus] = useState<'aberto' | 'finalizado'>('aberto')
    return (
        <div className={`border p-4 rounded-lg shadow-md bg-white py-8 px-4 mt-8  ${ 
            status === 'aberto' ? 'bg-green-50 border-green-400' : 'bg-gray-100 border-gray-400' }`}>
            <span className={`text-xs px-2 py-1 rounded font-bold ${
                status === 'aberto' ? 'bg-green-200 text-green-800' : 'bg-gray-300 text-gray-700' }`}>
                {status === 'aberto' ? 'Aberto' : 'Finalizado'}
            </span>
            
            <h3 className="font-bold text-lg mt-2">{titulo}</h3>
            <p>{descricao}</p>
            <p>{cliente}</p>

            <button onClick= {() => setStatus(status === 'aberto' ? 'finalizado' : 'aberto')}
                className= {`mt-4 px-4 py-2 rounded text-white font-bold ${
                status === 'aberto' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}>
                {status === 'aberto' ? 'Finalizar' : 'Reabrir'}
            </button>
        </div>
    )
}
export default ServiceCard