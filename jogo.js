var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() { //essa função será chamada no body do app.html onresize="ajustaTamanhoPalcoJogo()" 
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

