var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() { //essa função será chamada no body do app.html onresize="ajustaTamanhoPalcoJogo()" 
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() { //aparece o mosquito em qualquer parte do jogo

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
     // o -90 foi criado para que a imagem do mosquito não ultrapasse os limites da tela do jogo e obrigue a criação de uma barra de rolagem tanto vertical quanto horizontal

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoX = posicaoY < 0 ? 0 : posicaoY
    // os parâmetros acima foram criados para que a imagem do mosquito não suma quando ocupar a posição 0px, 0px da tela do jogo

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = 'mosquito1' //puxa as configurações da classe mosquito1 criada no estilo.css

    //abaixo a randomização nos eixos x e y de forma absoluta
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito) //cria um elemento filho no body
}