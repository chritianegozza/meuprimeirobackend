//criando o acesso para o express 
const express = require("express") 
const router = express.Router()

//chamando o express
const app = express()
//criar uma porta para nossa servidor
const porta = 3333;

const mulheres = [
    {
        nome: 'Silmara Conceição',
        imagem:'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora' 
    },
    {
        nome: 'Aline Diniz',
        imagem: 'https://github.com/alidiniz.png',
        minibio: 'Desenvolvedora FrontEnd'
    },
    {
        nome: 'Camila Cavalcante',
        imagem: 'https://github.com/cami-la.png',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Christiane Gozza',
        imagem: 'https://github.com/chritianegozza.png',
        minibio: 'Desenvolvedora Backend'
    },
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

//criando uma função para visualizar a nossa porta e se ela esta rodando
function mostraPorta() {
    console.log("Servidor criado e rodando na porta  ", porta)
}


app.use(router.get('/mulheres', mostraMulheres))
//ligar o servidor
app.listen(porta, mostraPorta)
