import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Outlet'
import OrdensDeServico from './pages/OrdensDeServico'
import Clients from './pages/Clients'
import { AuthProvider } from './contexts/AuthContext'
import { PrivateRoute } from './routes/PrivateRoute'
import { Login } from './pages/Login'
import { Cadastro } from './pages/Cadastro'


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro/>} />
          
          <Route element ={<PrivateRoute/>}>
            <Route element={<Layout />}>
              <Route path="/ordens-de-servico" element={<OrdensDeServico />} />
              <Route path="/clients" element={<Clients />} />
            </Route>
          </Route>  
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
