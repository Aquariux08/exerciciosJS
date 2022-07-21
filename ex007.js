var campoCPF = document.getElementById("cpf")
var txtCPF = document.getElementById("exibicaoCpf")

function transformarCPF(event){
    console.log(event.target.value)
    var valorCPF = event.target.value
    if (valorCPF.length > 12){
        console.log('eh maior que 12')
        txtCPF.innerText = `Seu CPF é: ${valorCPF.substring(0,3)}${valorCPF.substring(4,7)}${valorCPF.substring(8,11)}${valorCPF.substring(12,14)}`
    }
    else if (valorCPF.length >8){
        console.log('é maior que 8')
        txtCPF.innerText = `Seu CPF é: ${valorCPF.substring(0,3)}${valorCPF.substring(4,7)}${valorCPF.substring(8,11)}`
    }
    else if (valorCPF.length >4){
        console.log('é maior que 4')
        txtCPF.innerText = `Seu CPF é: ${valorCPF.substring(0,3)}${valorCPF.substring(4,7)}`
    }
    else{
        console.log('é maior que 0')
        txtCPF.innerText = `Seu CPF é: ${valorCPF}`
    }
}
campoCPF.addEventListener("input", transformarCPF)