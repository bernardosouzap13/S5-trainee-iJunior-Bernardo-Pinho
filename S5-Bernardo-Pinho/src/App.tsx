import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import ServiceCard from './components/ServiceCard'
import NewServiceForm from './components/NewServiceForm'

interface ServiceProps {
  titulo: string;
  cliente: string;
  descricao: string;
}

function App() {
  const [servicos, setServicos] = useState<ServiceProps[]>([])

  const adicionarServico = (servico: ServiceProps) => {
    setServicos([...servicos, servico])
  }
  return (
    <>
    <Header/>
    <NewServiceForm NovoServico={adicionarServico} />
      {servicos.map((servico, index) => (
        <ServiceCard key={index} {...servico} />
    ))}
    </>
  )
}

export default App
