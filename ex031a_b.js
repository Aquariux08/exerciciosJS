var deuses = ['Aegir', 'Aud', 'Balder']

//Questão a verifica tamanho da variavel 
console.log(deuses.length)


// Questão b utilizando for/for each/while/do while

// usando o for para printar todos os nomes dentro do array
for(var cont = 0; cont < deuses.length; cont++){
    console.log(deuses[cont]) 
}

// usando o for each para printar todos os nomes dentro do array
function imprimir(item) {
    console.log(item);
} 
deuses.forEach(imprimir);

// usando o for of para printar todos os nomes dentro do array
for(let value of deuses){
    console.log(value)
}

// usando o while para printar todos os nomes dentro do array
var cont = 0;
while(cont < deuses.length){
    console.log(deuses[cont])
    cont++
}

// usando o do while para printar todos os nomes dentro do array
var cont = 0
do {
    console.log(deuses[cont])
    cont++
} while(cont < deuses.length)