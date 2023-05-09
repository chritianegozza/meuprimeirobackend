//criando o acesso para o express 
const express = require("express") 
const roter = express.Router()

//chamando o express
const app = express()
const porta = 3333;

function mostraOla(request, response){
    response.send("Olá, Mundo!")
}

//criando uma função para visualizar a nossa porta e se ela esta rodando
function mostraPorta() {
    console.log("Servidor criado e rodando na porta  ", porta)
}

app.use(roter.get("/ola", mostraOla))
//ligar o servidor
app.listen(porta, mostraPorta)
