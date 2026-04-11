import { Link } from 'react-router'

const Menu = () => {
  return (
    <nav className="flex gap-4 justify-center bg-gray-800 p-4">
      <Link to="/ordens-de-servico" className="text-white hover:text-gray-300 font-semibold">
        Ordens de Serviço
      </Link>
      <Link to="/clients" className="text-white hover:text-gray-300 font-semibold">
        Clientes
      </Link>
    </nav>
  )
}

export default Menu