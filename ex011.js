var carregamento = document.getElementById("carregar")

function load(){
    carregamento.innerText = "Esse texto foi inserido pelo JS!";
}

carregamento.addEventListener("click",load)