var result = document.getElementById("resultado")
result.innerHTML = ["repetição","repetição","repetição","repetição","repetição",]

var cont = 0
do {
    console.log(result[cont])
    cont++
} while(cont < result.length)