let nota1 = parseFloat(prompt("Primeira nota: "))
let nota2 = parseFloat(prompt("Segunda nota: "))
let nota3 = parseFloat(prompt("Terceira nota: "))

if (nota1 <= nota2 && nota2 <= nota3) {
let media = (nota2 + nota3) / 2
    if (media >= 7) {
        alert("Aprovado por média")
    }
    else if (media >= 3 && media < 7) {
        alert("Prova final")
    }
    else {
        alert("Reprovado direto")
    }
}
if (nota1 <= nota3 && nota3 <= nota2) {
    let media = (nota1 + nota3) / 2
    
    if (media >= 7) {
        alert("Aprovado por média")
    }
    else if (media >= 3 && media < 7) {
        alert("Prova final")
    }
    else {
        alert("Reprovado direto")
    }
}
if (nota2 <= nota1 && nota1 <= nota3) {
    let media = (nota1 + nota3) / 2
    
    if (media >= 7) {
        alert("Aprovado por média")
    }
    else if (media >= 3 && media < 7) {
        alert("Prova final")
    }
    else {
        alert("Reprovado direto")
    }
}
if (nota2 <= nota3 && nota3 <= nota1) {
    let media = (nota1 + nota3) / 2

    if (media >= 7) {
        alert("Aprovado por média")
    }
    else if (media >= 3 && media < 7) {
        alert("Prova final")
    }
    else {
        alert("Reprovado direto")
    }
}
if (nota3 <= nota1 && nota1 <= nota2) {
    let media = (nota1 + nota2) / 2
    
    if (media >= 7) {
        alert("Aprovado por média")
    }
    else if (media >= 3 && media < 7) {
        alert("Prova final")
    }
    else {
        alert("Reprovado direto")
    }
}

if (nota3 <= nota2 && nota2 <= nota1) {
    let media = (nota1 + nota2) / 2
    
    if (media >= 7) {
        alert("Aprovado por média")
    }
    else if (media >= 3 && media < 7) {
        alert("Prova final")
    }
    else {
        alert("Reprovado direto")
    }
}