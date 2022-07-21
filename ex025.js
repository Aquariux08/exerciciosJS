
for (var primeiroFator= 0; primeiroFator < 11; primeiroFator++) {
    document.write("<p>Tabuada do " + primeiroFator+"<p>" )
    for(var segundoFator = 0; segundoFator < 11; segundoFator++){
        document.write(`${primeiroFator} x ${segundoFator} = ${(primeiroFator * segundoFator)} <br>`)
    }
}