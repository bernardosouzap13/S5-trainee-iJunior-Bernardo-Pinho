import {useEffect, useState} from 'react'
import type {Service, CreateServicePropsData} from '../types'
import {getAll, createService, tarefaDelete} from '../services/serviceOrderService'
import ServiceCard from '../components/ServiceCard'
import NewServiceForm from '../components/NewServiceForm'

const OrdensDeServico = () => {
    const[services, setServices] = useState<Service[]>([])

    useEffect(() => {
        getAll().then(setServices)
    }, [])

    const handleCreate= async (data:CreateServicePropsData)=> {
        const novo = await createService(data)
        setServices(prev => [...prev,novo])
    }

    const handleDelete=  async (id:number) => {
        await tarefaDelete(id)
        setServices(prev => prev.filter(s => s.id !== id))
    }

    return (
        <div>
            <NewServiceForm NewService={handleCreate} />
            {services.map(s => (
                <ServiceCard key = {s.id} {...s} onDelete={handleDelete} />
            ))}
        </div>
    )
}

export default OrdensDeServico

