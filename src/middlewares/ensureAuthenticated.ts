import { Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string
}

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // Receber o token
  const authToken = request.headers.authorization

  // Validar se authToken está preenchido
  if (!authToken) {
    return response.status(401).end()
  }

  const [, token ] = authToken.split(" ")
  
  // Validar se token é válido
  try {
    const { sub } = verify( token, "0181f463b3129434fd5ef187aa53eb62") as IPayload
    
    // Recuperar informações do usuário
    request.user_id = sub 

    return next()
  } catch (err){
    return response.status(401).end()
  }
  
  
}

export {ensureAuthenticated}