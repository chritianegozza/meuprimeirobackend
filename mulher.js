
const express = require("express") 
const roter = express.Router()


//chamando o express
const app = express()
//criar uma porta para nossa servidor
const porta = 3333;

function mostraMulher(request, response){
    response.json({
        nome: 'Christiane Gozza',
        imagem: 'https://github.com/chritianegozza.png',
        minibio: 'Desenvolvedora Backend'
    })
}

//criando uma função para visualizar a nossa porta e se ela esta rodando
function mostraPorta() {
    console.log("Servidor criado e rodando na porta  ", porta)
}


app.use(roter.get('/mulher', mostraMulher))
//chamar a função
//mostraPorta()


//ligar o servidor
app.listen(porta, mostraPorta)









