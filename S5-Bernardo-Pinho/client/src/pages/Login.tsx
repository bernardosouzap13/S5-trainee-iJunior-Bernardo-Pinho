import {useState} from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export function Login() {
    const [email, setEmail]           = useState('')
    const [senha, setSenha]           = useState('')
    const [erro, setErro]             = useState<string | null>(null)
    const [carregando, setCarregando] = useState(false)

    const {login} = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setErro(null)
        setCarregando(true)

        try {
            await login(email,senha)
            navigate ('/')
        } catch (err: unknown) {
            setErro(err instanceof Error? err.message: 'Erro ao fazer login.')
        } finally {
            setCarregando(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">iRepair</h1>
                <p className="text-sm text-gray-500 text-center mb-6">Acesse sua conta para continuar</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900"
                    />
                    <input
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        placeholder="Senha"
                        required
                        className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-900"
                    />
                    {erro && <p className="text-sm text-red-600">{erro}</p>}
                    <button
                        type="submit"
                        disabled={carregando}
                        className="w-full rounded-md bg-gray-900 text-white py-2 font-medium hover:bg-black transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {carregando ? 'Entrando...' : 'Entrar'}
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/cadastro')}
                        className="w-full rounded-md border border-gray-300 text-gray-700 py-2 font-medium hover:bg-gray-50 transition"
                    >
                        Cadastrar-se
                    </button>
                </form>
            </div>
        </div>
    )
}