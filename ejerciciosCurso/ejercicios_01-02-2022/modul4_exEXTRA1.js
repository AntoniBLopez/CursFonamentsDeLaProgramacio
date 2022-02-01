function obtenerNumerosUsuario() {
    const numeroDividendoUsuario = Number(document.getElementById("numeroDividendoUsuario").value)
    const numeroDivisorUsuario = Number(document.getElementById("numeroDivisorUsuario").value)
    const imprimirResultadoPantalla = document.getElementById("imprimirResultadoPantalla")

    if(numeroDivisorUsuario >= 2 && numeroDivisorUsuario <= 7) {
        if(numeroDividendoUsuario % numeroDivisorUsuario === 0) {
            imprimirResultadoPantalla.innerText = "El dividendo es múltiple del divisor"
        }
        if (numeroDividendoUsuario % numeroDivisorUsuario !== 0) {
            imprimirResultadoPantalla.innerText = "El dividendo NO es múltiple del divisor"
        }
    }
    else {
        alert("¡Error! El número divisor tiene que ser entre el 2 y el 7")
    }
}