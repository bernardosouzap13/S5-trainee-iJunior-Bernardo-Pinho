import {useEffect, useState} from 'react'
import type {Service, CreateServicePropsData} from '../types'
import {getAllServices, createService, deleteService} from '../services/serviceOrderService'
import ServiceCard from './ServiceCard'
import NewServiceForm from './NewServiceForm'

const OrdensDeServico = () => {
    const[services, setServices] = useState<Service[]>([])

    useEffect(() => {
        getAllServices().then(setServices)
    }, [])

    const handleCreate= async (data:CreateServicePropsData)=> {
        const novo = await createService(data)
        setServices(prev => [...prev,novo])
    }

    const handleDelete=  async (id:number) => {
        await deleteService(id)
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

