var numeros = [1,2,3,4,5,6,7,8,9,10]
function callback(num){
    return num*2
}
var clone = numeros.map(callback)
console.log(clone)

function filtrar(num){
    if(num > 5){
        return num
    }
}
var filtro = numeros.filter(filtrar)
console.log(filtro)

function reduzir(valorAnterior, valorAtual){
    return valorAnterior + valorAtual
}

const initialValue = 0;
const sumWithInitial = numeros.reduce(
    reduzir,initialValue);

console.log(sumWithInitial);
