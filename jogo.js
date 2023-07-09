var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var criaMosquitoTempo = 1500;

var nivel = window.location.search
nivel = nivel.replace('?', '') //replace retira caracteres do alert, neste caso, retira ? do texto e substitui por vazio ''

if (nivel === 'facil') {
    criaMosquitoTempo = 1500
} else if (nivel === 'normal') {
    criaMosquitoTempo = 1000
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() { //essa função será chamada no body do app.html onresize="ajustaTamanhoPalcoJogo()" 
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);

    // Obtenha o mosquito atual e atualize sua posição para se ajustar à nova tela
    var mosquito = document.getElementById('mosquito');
    if (mosquito) {
        var posicaoX = parseInt(mosquito.style.left);
        var posicaoY = parseInt(mosquito.style.top);

        posicaoX = (posicaoX / largura) * window.innerWidth;
        posicaoY = (posicaoY / altura) * window.innerHeight;

        mosquito.style.left = posicaoX + 'px';
        mosquito.style.top = posicaoY + 'px';
    }

}

ajustaTamanhoPalcoJogo();

window.addEventListener('resize', ajustaTamanhoPalcoJogo);

var cronometro = setInterval(function () {

    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro) //elimina o cronômetro
        clearInterval(criaMosquito) //elimina a criação randômica de mosquito
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo //pega o vaor de cronometro no arquivo app.html
    }

}, 1000)

function posicaoRandomica() { //aparece o mosquito em qualquer parte do jogo, incluida no app.html também

    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove() //remover o mosquito anterior (caso exista) 

        //console.log('elemento selecionado foi: v' + vidas)
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

            vidas++
        }

    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    // o -90 foi criado para que a imagem do mosquito não ultrapasse os limites da tela do jogo e obrigue a criação de uma barra de rolagem tanto vertical quanto horizontal

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    // os parâmetros acima foram criados para que a imagem do mosquito não suma quando ocupar a posição 0px, 0px da tela do jogo

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //puxa as configurações da classe mosquito1 criada no estilo.css

    //abaixo a randomização nos eixos x e y de forma absoluta
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito) //cria um elemento filho no body

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'

    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}