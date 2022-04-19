import express from 'express'

// instalar as tipagens @types/express
const app = express()

/* MÉTODOS
- GET    => Buscar uma informação
- POST   => Inserir(CRIAR) uma informação
- PUT    => Alterar uma informação
- DELETE => Remover uma informação
- PATCH  => Alterar uma informação específica
*/

app.get(/*primeiro parâmetro é a rota*/ "/test",
 /* segundo parâmetro é a função que essa rota irá executar */ (request, response) => {
  // Request: entrando
  // Response: saindo
  return response.send("Olá NLW")
})

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW método POST") 
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"))