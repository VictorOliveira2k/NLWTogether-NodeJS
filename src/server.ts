import "reflect-metadata" 
import express from 'express'

import { router } from "./routes"

import "./database"

// instalar as tipagens @types/express
const app = express()

app.use(express.json())

app.use(router)

/* MÉTODOS
- GET    => Buscar uma informação
- POST   => Inserir(CRIAR) uma informação
- PUT    => Alterar uma informação
- DELETE => Remover uma informação
- PATCH  => Alterar uma informação específica
*/

/* TIPOS DE PARÂMETROS 
-   Routes Params => http://localhost:3000/produtos/7f6a98sdfg876
-   Query Params => https://localhost:3000/produtos?name=teclado&description=tecladobom

-   Body Params =>  {
      "name": "teclado",
      "description": "teclado bom"
    }

*/

// app.get(/*primeiro parâmetro é a rota*/ "/test",
//  /* segundo parâmetro é a função que essa rota irá executar */ (request, response) => {
//   // Request: entrando
//   // Response: saindo
//   return response.send("Olá NLW")
// })


// http://localhost:3000
app.listen(3000, () => console.log("Server is running"))