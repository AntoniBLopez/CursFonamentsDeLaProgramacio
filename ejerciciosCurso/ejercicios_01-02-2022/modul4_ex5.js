function enviarResultado() {
    const primerNumero = Number(document.getElementById("primerNumeroUsuario").value)
    const operadorUsuario = document.getElementById("operadorUsuario").value
    const segundoNumero = Number(document.getElementById("segundoNumeroUsuario").value)
    const imprimirResultado = document.getElementById("imprimirResultado")

    console.log(primerNumero + operadorUsuario + segundoNumero)

    if(operadorUsuario === "+") {
        const resultado = primerNumero + segundoNumero

        return imprimirResultado.innerText = `El resultado de la operación es: ${resultado}`
    }
    if(operadorUsuario === "-") {
        const resultado = primerNumero - segundoNumero

        return imprimirResultado.innerText = `El resultado de la operación es: ${resultado}`
    }
    if(operadorUsuario === "*") {
        const resultado = primerNumero * segundoNumero

        return imprimirResultado.innerText = `El resultado de la operación es: ${resultado}`
    }
    if(operadorUsuario === "/") {
        const resultado = primerNumero / segundoNumero

        return imprimirResultado.innerText = `El resultado de la operación es: ${resultado}`
    }
    else {
        return imprimirResultado.innerText = "Debes escribir un operador válido para poder obtener el resultado de tu operación"
    }
}