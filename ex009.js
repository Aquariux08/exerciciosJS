var botaoVerde = document.getElementById("btn-verde")
var botaoVermelho = document.getElementById("btn-vermelho")
var quadradoColorido = document.getElementById("bloco-colorido")

function colorirVerde(){
    quadradoColorido.style = "background-color: #00FF00;";
}

function colorirVermelho(){
    quadradoColorido.style = "background-color: #FF0000;";
}

botaoVerde.addEventListener("click", colorirVerde)
botaoVermelho.addEventListener("click", colorirVermelho)
