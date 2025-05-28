var peso = document.getElementById('peso')
var altura = document.getElementById('altura')

var verificar = document.getElementById('verificar')
verificar.addEventListener('click', calcular)

function calcular() {
var res = document.getElementById('res')

var p = Number(peso.value)
var a = Number(altura.value)
var soma = p / (a * a)

    if (peso.value == 0 || altura.value == 0) {
        alert('[ERRO] Faltão informações')
    } else if (soma <= 18.5) {
        res.innerHTML = `Seu IMC é <strong>${soma.toFixed(1)} - BAIXO PESO!</BAIXO PESO!>`
        res.style.color = 'blue'
    } else if (soma >= 18.6 && soma <= 24.9) {
        res.innerHTML = `Seu IMC é <strong>${soma.toFixed(1)} - SAUDÁVEL :)</strong>`
        res.style.color = 'green'
    } else if (soma >= 25 && soma <= 29.9) {
        res.innerHTML = `Seu IMC é <strong>${soma.toFixed(1)} - EXCESSO DE PESO!</strong>`
        res.style.color = 'orange'
    } else if (soma >= 30 && soma <= 35) {
        res.innerHTML = `Seu IMC é <strong>${soma.toFixed(1)} - OBESIDADE!!</strong>`
        res.style.color = 'red'
    } else {
        res.innerHTML = `Seu IMC é <strong>${soma.toFixed(1)} - OBESIDADE EXTREMA!!!</strong>`
        res.style.color = 'purple'
    }
}