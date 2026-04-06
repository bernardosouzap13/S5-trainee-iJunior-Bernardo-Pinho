import { app } from "./config/expressConfig";

app.listen(3333, () => {
    console.log(`Servidor rodando na porta 3333`);
})

if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET não definido nas variáveis de ambiente')
}
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL não definido nas variáveis de ambiente')
}