var btnAddNumero = document.getElementById('add-numero');
var inputNumero = document.getElementById('numero');
var ulNumero = document.getElementById('lista-numeros');

btnAddNumero.addEventListener('click',() => {
    if(inputNumero.value.trim() == '') {
        alert('Preenchimento Incorreto!');
        return false;
    }

    var valueNumeros = parseInt(inputNumero.value);


    if(valueNumeros % 2 == 0) {
        var strongEl = document.createElement('strong');
            strongEl.appendChild(document.createTextNode(valueNumeros))
            
        var no = document.createElement("li");
        no.appendChild(strongEl);


    } else {
        var no = document.createElement("li");
        no.appendChild(document.createTextNode(valueNumeros));
    }
    ulNumero.appendChild(no);   
});