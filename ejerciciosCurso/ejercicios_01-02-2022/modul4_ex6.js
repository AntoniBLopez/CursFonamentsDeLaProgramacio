
function obtenerSignoZodiaco() {
    const diaNacimientoUsuario = Number(document.getElementById("diaNacimientoUsuario").value)
    const mesNacimientoUsuario = Number(document.getElementById("mesNacimientoUsuario").value)
    const imprimirResultado = document.getElementById("imprimirResultado")
    
    const isAries = (diaNacimientoUsuario >= 21 && diaNacimientoUsuario <= 31 && mesNacimientoUsuario === 03) || (diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 19 && mesNacimientoUsuario === 04)
    const isTauro = (diaNacimientoUsuario >= 20 && diaNacimientoUsuario <= 30 && mesNacimientoUsuario === 04) || (diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 20 && mesNacimientoUsuario === 05)
    const isGeminis = (diaNacimientoUsuario >= 21 && diaNacimientoUsuario <= 31 && mesNacimientoUsuario === 05) || (diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 20 && mesNacimientoUsuario === 06)
    const isCancer = (diaNacimientoUsuario >= 21 && diaNacimientoUsuario <= 30 && mesNacimientoUsuario === 06) || (diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 22 && mesNacimientoUsuario === 07)
    const isLeo = (diaNacimientoUsuario >= 23 && diaNacimientoUsuario <= 31 && mesNacimientoUsuario === 07) || (diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 22 && mesNacimientoUsuario === 08)
    const isVirgo = (diaNacimientoUsuario >= 23 && diaNacimientoUsuario <= 31 && mesNacimientoUsuario === 08) || (diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 22 && mesNacimientoUsuario === 09)
    const isLibra = (diaNacimientoUsuario >= 23 && diaNacimientoUsuario <= 30 && mesNacimientoUsuario === 09) || (diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 22 && mesNacimientoUsuario === 10)
    const isEscorpio = (diaNacimientoUsuario >= 23 && diaNacimientoUsuario <= 31 && mesNacimientoUsuario === 10) || (diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 21 && mesNacimientoUsuario === 11)
    const isSargitario = (diaNacimientoUsuario >= 22 && diaNacimientoUsuario <= 30 && mesNacimientoUsuario === 11) || (diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 21 && mesNacimientoUsuario === 12)
    const isCapricornio = (diaNacimientoUsuario >= 22 && diaNacimientoUsuario <= 31 && mesNacimientoUsuario === 12) || (diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 19 && mesNacimientoUsuario === 01)
    const isAcuario = (diaNacimientoUsuario >= 20 && diaNacimientoUsuario <= 31 && mesNacimientoUsuario === 01) || (diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 18 && mesNacimientoUsuario === 02)
    const isPiscis = (diaNacimientoUsuario >= 19 && diaNacimientoUsuario <= 29 && mesNacimientoUsuario === 02) || (diaNacimientoUsuario >= 01 && diaNacimientoUsuario <= 20 && mesNacimientoUsuario === 03)

    const addMonthAndYearCorrectly = (diaNacimientoUsuario < 1 || diaNacimientoUsuario > 31 ) || (mesNacimientoUsuario < 1 || mesNacimientoUsuario > 12)

    if(isAries) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Aries`
    }

    if(isTauro) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Tauro`
    }

    if(isGeminis) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Géminis`
    }

    if(isCancer) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Cáncer`
    }

    if(isLeo) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Leo`
    }

    if(isVirgo) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Virgo`
    }

    if(isLibra) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Libra`
    }

    if(isEscorpio) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Escorpio`
    }

    if(isSargitario) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Sagitario`
    }

    if(isCapricornio) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Capricornio`
    }

    if(isAcuario) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Acuario`
    }

    if(isPiscis) {
        imprimirResultado.innerText = `Tu signo del zodiaco es: Piscis`
    }

    if (addMonthAndYearCorrectly) {
        imprimirResultado.innerText = `El día debe ser mayor o igual a 1 y menor o igual a 31 por regla general.
        Y el mes debe ser mayor o igual a 1 y menor o igual a 12 por regla general.`
    }
}