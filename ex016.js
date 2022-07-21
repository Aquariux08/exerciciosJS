var dataNascimento = 2000

function idade(ano){
    if(2022- ano >= 18){
        return "maior de idade"
    }else{
        return "menor de idade"
    }
}

function idade2(ano){
    return 2022 - ano >=18 ? "maior de idade" : "menor de idade"
} 

console.log(idade(dataNascimento))
console.log(idade2(dataNascimento))