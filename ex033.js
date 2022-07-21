var novaCor = document.getElementById("cor")
var botaoCor = document.getElementById("btn-cor")
var listaCores = document.getElementById("lista-cores")

function adicionarCores(){
    var cor = novaCor.value
    if(cor.trim() == ""){
        alert("Esta cor não existe")
        return false
    }

    var item = document.createElement("li")
    item.appendChild(document.createTextNode(cor))
    listaCores.appendChild(item)
}

botaoCor.addEventListener("click",adicionarCores)