import {useState} from 'react'

interface ServiceProps {
  titulo: string;
  cliente: string;
  descricao: string;
}

interface Props {
  NovoServico: (servico: ServiceProps) => void
}

const NewServiceForm = ({ NovoServico }: Props) => {
  const [titulo, setTitulo] = useState('')
  const [cliente, setCliente] = useState('')
  const [descricao, setDescricao] = useState('')

  const Salvar = () => {
    if (!titulo || !cliente || !descricao) return 
    
    NovoServico({ titulo, cliente, descricao })
    setTitulo('')
    setCliente('')
    setDescricao('')

  }

  return (

    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-8">
        <input placeholder="Titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        <input placeholder="Cliente" value={cliente} onChange={(e) => setCliente(e.target.value)} />
        <input placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />   
        <button onClick={Salvar}>Adicionar</button>
    </div>
  )
}

export default NewServiceForm