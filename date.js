//criando o acesso para o express 
const express = require("express") 
const roter = express.Router()

//chamando o express
const app = express()
//criar uma porta para nossa servidor
const porta = 3333;

function mostraHora(request, response) {

    const data = new Date()
   
    const hora = data.toLocaleTimeString('pt-BR')
   
    response.send(hora)
   
}
//criando uma função para visualizar a nossa porta e se ela esta rodando
function mostraPorta() {
    console.log("Servidor criado e rodando na porta  ", porta)
}


app.use(roter.get('/date', mostraHora))
//ligar o servidor
app.listen(porta, mostraPorta)
