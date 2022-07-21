

function pesquisaLetras(palavra){
    palavra = palavra.toLowerCase()
    return palavra.includes(`dota`)
}

console.log(pesquisaLetras("Dota é melhor que LoL"));    

function pesquisaLetras2(palavra){
    return palavra.toLowerCase().includes('dota')
}

console.log(pesquisaLetras("Dotah ahahha"));    
