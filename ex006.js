var campoCPF = document.getElementById("cpf")
var txtCPF = document.getElementById("exibicaoCpf")

function transformarCPF(event){
    console.log(event.target.value)
    var valorCPF = event.target.value
    if (valorCPF.length > 9){
        console.log('eh maior que 9')
        txtCPF.innerText = `Seu CPF é: ${valorCPF.substring(0,3)}.${valorCPF.substring(3,6)}.${valorCPF.substring(6,9)}-${valorCPF.substring(9,11)}`
    }
    else if (valorCPF.length >6){
        console.log('é maior que 6')
        txtCPF.innerText = `Seu CPF é: ${valorCPF.substring(0,3)}.${valorCPF.substring(3,6)}.${valorCPF.substring(6,9)}`
    }
    else if (valorCPF.length >3){
        console.log('é maior que 3')
        txtCPF.innerText = `Seu CPF é: ${valorCPF.substring(0,3)}.${valorCPF.substring(3,6)}`
    }
    else{
        console.log('é maior que 0')
        txtCPF.innerText = `Seu CPF é: ${valorCPF}`
    }
}
campoCPF.addEventListener("input", transformarCPF)
