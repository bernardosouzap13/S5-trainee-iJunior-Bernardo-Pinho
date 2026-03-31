import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Outlet'
import OrdensDeServico from './components/OrdensDeServico'
import Clients from './components/Clients'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<OrdensDeServico />} />
          <Route path="/clients" element={<Clients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
