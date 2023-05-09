//criando o acesso para o express 
const express = require("express") 

//chamando o express
const app = express()
//criar uma porta para nossa servidor
const porta = 3333;

//criando uma função para visualizar a nossa porta e se ela esta rodando
function mostraPorta() {
    console.log("Servidor criado e rodando na porta  ", porta)
}


//chamar a função
//mostraPorta()


//ligar o servidor
app.listen(porta, mostraPorta)
