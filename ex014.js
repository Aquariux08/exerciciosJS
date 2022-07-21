var num = 25

function divisao(inteiro){
    if(inteiro % 2 === 0){
        return "par"
    }

    if(inteiro % 2 != 0){
        return "ímpar"
    }
}


function divisao2(inteiro){
    if(inteiro % 2 === 0){
        return "par"
    } else{
        return "ímpar"
    }
}

function divisao3(inteiro){
    if(inteiro % 2 === 0){
        return "par"
    } 
    return "ímpar"
} 

function divisao4(inteiro){
    return inteiro % 2 === 0 ? "par" : "ímpar"
} 
console.log(divisao4(num))