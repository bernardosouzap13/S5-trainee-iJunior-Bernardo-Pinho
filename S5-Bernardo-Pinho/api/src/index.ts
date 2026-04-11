import { app } from "./config/expressConfig";

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET não definido nas variáveis de ambiente')
}
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL não definido nas variáveis de ambiente')
}

