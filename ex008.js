
var botaoSoma = document.getElementById("btn-soma")
var result = document.getElementById("resultado")

function resultadoSoma(){
    var num1 = parseInt(document.getElementById("soma1").value)
    var num2 = parseInt(document.getElementById("soma2").value)
    result.innerText = `O resultado é igual a: ${num1 + num2}`

}

botaoSoma.addEventListener("click", resultadoSoma)