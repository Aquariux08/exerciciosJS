var nome = document.getElementById("nomeUsuario")
var sobrenome = document.getElementById("sobrenomeUsuario")
var botaoClicar = document.getElementById("btn-clicar")

function lerNome(){
    var campoNome = nome.value
    var campoSobrenome = sobrenome.value
    alert(`Olá ${campoNome} ${campoSobrenome}!`)
}
botaoClicar.addEventListener("click", lerNome)
