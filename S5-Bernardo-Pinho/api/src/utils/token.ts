import jwt from "jsonwebtoken";

interface TokenPayload {
    id: number 
    email: string
}

export function generateToken(payload: TokenPayload): string{
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: (process.env.JWT_EXPIRES_IN || "1h") as any,
    })
}

export function verifyToken(token: string): TokenPayload {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as TokenPayload
    return decoded
}

