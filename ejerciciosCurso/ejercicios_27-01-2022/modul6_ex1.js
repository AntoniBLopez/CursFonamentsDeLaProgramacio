
function sumarNumeros() {
    let primerNumero = document.getElementById("primerNumeroUsuario").value
    let segundoNumero = document.getElementById("segundoNumeroUsuario").value

    resultado = Number(primerNumero) + Number(segundoNumero)

    return document.getElementById("resultado").innerText = `El resultado es: ${resultado}`
}


function restarNumeros() {
    let primerNumero = document.getElementById("primerNumeroUsuario").value
    let segundoNumero = document.getElementById("segundoNumeroUsuario").value

    resultado = Number(primerNumero) - Number(segundoNumero)

    return document.getElementById("resultado").innerText = `El resultado es: ${resultado}`
}


function dividirNumeros() {
    let primerNumero = document.getElementById("primerNumeroUsuario").value
    let segundoNumero = document.getElementById("segundoNumeroUsuario").value

    resultado = Number(primerNumero) / Number(segundoNumero)

    return document.getElementById("resultado").innerText = `El resultado es: ${resultado}`
}


function multiplicarNumeros() {
    let primerNumero = document.getElementById("primerNumeroUsuario").value
    let segundoNumero = document.getElementById("segundoNumeroUsuario").value

    resultado = Number(primerNumero) * Number(segundoNumero)

    return document.getElementById("resultado").innerText = `El resultado es: ${resultado}`
}


function residuoDivision() {
    let primerNumero = document.getElementById("primerNumeroUsuario").value
    let segundoNumero = document.getElementById("segundoNumeroUsuario").value

    resultado = Number(primerNumero) % Number(segundoNumero)

    return document.getElementById("resultado").innerText = `El resultado es: ${resultado}`
}