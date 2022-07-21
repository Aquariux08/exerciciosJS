var clique = document.getElementById("clicar")

function gerar() {
    let deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr'];
    let lista = document.getElementById("lista");
    
    for(var i = 0; i < deuses.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(deuses[i]));
        lista.appendChild(item);
    }
};
//document.write(gerar())
clique.addEventListener("click",gerar)