var result = document.getElementById("resultado")
result.innerHTML = ["repetição","repetição","repetição","repetição","repetição",]

function imprimir(texto){
    console.log(texto)
    
}
result.forEach(imprimir)
