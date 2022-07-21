var nome = document.getElementById("nomeUsuario")
var botaoClicar = document.getElementById("btn-clicar")

function contarLetra(){
    var campoNome = nome.value
    document.write(`o nome ${campoNome} tem tamanho ${campoNome.length}`)
}
botaoClicar.addEventListener("click", contarLetra)
