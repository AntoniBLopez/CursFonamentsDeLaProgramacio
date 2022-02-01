
function obtenerSignoZodiaco() {
    const diaNacimientoUsuario = Number(document.getElementById("diaNacimientoUsuario").value)
    const mesNacimientoUsuario = Number(document.getElementById("mesNacimientoUsuario").value)
    const imprimirResultado = document.getElementById("imprimirResultado")

    // Signo del Zodiaco de Aries: HECHO

    if(diaNacimientoUsuario >= 21 && diaNacimientoUsuario <= 31 && mesNacimientoUsuario === 03) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Aries`
    }
    if(diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 19 && mesNacimientoUsuario === 04) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Aries`
    }

    // Signo del Zodiaco de Tauro: 

    if(diaNacimientoUsuario >= 20 && diaNacimientoUsuario <= 30 && mesNacimientoUsuario === 04) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Tauro`
    }
    if(diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 20 && mesNacimientoUsuario === 05) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Tauro`
    }

    // Signo del Zodiaco de Géminis:

    if(diaNacimientoUsuario >= 21 && diaNacimientoUsuario <= 31 && mesNacimientoUsuario === 05) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Géminis`
    }
    if(diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 20 && mesNacimientoUsuario === 06) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Géminis`
    }

    // Signo del Zodiaco de Cáncer:

    if(diaNacimientoUsuario >= 21 && diaNacimientoUsuario <= 30 && mesNacimientoUsuario === 06) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Cáncer`
    }
    if(diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 22 && mesNacimientoUsuario === 07) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Cáncer`
    }

    // Signo del Zodiaco de Leo:

    if(diaNacimientoUsuario >= 23 && diaNacimientoUsuario <= 31 && mesNacimientoUsuario === 07) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Leo`
    }
    if(diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 22 && mesNacimientoUsuario === 08) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Leo`
    }

    // Signo del Zodiaco de Virgo:

    if(diaNacimientoUsuario >= 23 && diaNacimientoUsuario <= 31 && mesNacimientoUsuario === 08) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Virgo`
    }
    if(diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 22 && mesNacimientoUsuario === 09) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Virgo`
    }

    // Signo del Zodiaco de Libra:

    if(diaNacimientoUsuario >= 23 && diaNacimientoUsuario <= 30 && mesNacimientoUsuario === 09) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Libra`
    }
    if(diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 22 && mesNacimientoUsuario === 10) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Libra`
    }

    // Signo del Zodiaco de Escorpio:

    if(diaNacimientoUsuario >= 23 && diaNacimientoUsuario <= 31 && mesNacimientoUsuario === 10) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Escorpio`
    }
    if(diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 21 && mesNacimientoUsuario === 11) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Escorpio`
    }

    // Signo del Zodiaco de Sagitario:

    if(diaNacimientoUsuario >= 22 && diaNacimientoUsuario <= 30 && mesNacimientoUsuario === 11) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Sagitario`
    }
    if(diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 21 && mesNacimientoUsuario === 12) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Sagitario`
    }

    // Signo del Zodiaco de Capricornio:

    if(diaNacimientoUsuario >= 22 && diaNacimientoUsuario <= 31 && mesNacimientoUsuario === 12) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Capricornio`
    }
    if(diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 19 && mesNacimientoUsuario === 01) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Capricornio`
    }

    // Signo del Zodiaco de Acuario:

    if(diaNacimientoUsuario >= 20 && diaNacimientoUsuario <= 30 && mesNacimientoUsuario === 01) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Acuario`
    }
    if(diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 18 && mesNacimientoUsuario === 02) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Acuario`
    }

    // Signo del Zodiaco de Piscis:

    if(diaNacimientoUsuario >= 19 && diaNacimientoUsuario <= 29 && mesNacimientoUsuario === 02) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Piscis`
    }
    if(diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 20 && mesNacimientoUsuario === 03) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Piscis`
    }
}