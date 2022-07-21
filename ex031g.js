//utilizando somente o método sort
var numeros = [6,8,2,4,7,1,9,5,3]
numeros.sort()
console.log(numeros)

// utilizando função
var numeros = [6,8,2,4,7,1,9,5,3]
function sortNumeros(a,b){
    return a - b
}
console.log(numeros.sort(sortNumeros))