import {useState} from 'react'
import type { CreateServicePropsData } from '../types'

interface Props {
  NewService: (servico: CreateServicePropsData) => void
}

const NewServiceForm = ({ NewService}: Props) => {
  const [device, setDevice] = useState('')
  const [issue, setIssue] = useState('')
  const [clientId, setClientId] = useState('')

  const Save = () => {
    if (!issue || !device || !clientId) return 
    
    NewService({ device, issue, status: 'open', clientId: Number(clientId) })
    setDevice('')
    setIssue('')
    setClientId('')
  }

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-8">
        <input placeholder="ID do Cliente" type="number" value={clientId} onChange={(e) => setClientId(e.target.value)} />
        <input placeholder="Dispositivo" value={device} onChange={(e) => setDevice(e.target.value)} />
        <input placeholder="Problema" value={issue} onChange={(e) => setIssue(e.target.value)} />   
        <button onClick={Save}>Adicionar</button>
    </div>
  )
}

export default NewServiceForm