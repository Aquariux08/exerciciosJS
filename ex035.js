function temporizador(duracao,display){

    var timer = duracao,segundos

    setInterval(function(){
        segundos = parseInt(timer % 60, 10)

        display.textContent = segundos

        if(--timer < 0){
            timer = duracao
        }

    },1000)

}

window.onload  = function(){
    var duracao = 10
    var display= document.getElementById("tempo")

    display.innerHTML 
    temporizador(duracao,display)

}