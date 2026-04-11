import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export function PrivateRoute() {
    const { isAuthenticated, isLoading} = useAuth()

    if (isLoading) {
        return <div className="min-h-screen grid place-items-center text-white">Carregando...</div>
    }

    if(!isAuthenticated) {
        return <Navigate to = "/login" replace />
    }

    return <Outlet/>
}