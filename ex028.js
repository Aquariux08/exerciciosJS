var botaoConfira = document.getElementById("btn-confira")

function numeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
var numJogo = numeroAleatorio(1,20)


function compararNum(){
    var numEscolhido = document.getElementById("numeroJogador")
    if(parseInt(numEscolhido.value) === numJogo){
        document.write("Acertou!")  
    } else{
        document.write("Não foi dessa vez!")   
    }
    document.write(numJogo)
}
botaoConfira.addEventListener("click",compararNum)