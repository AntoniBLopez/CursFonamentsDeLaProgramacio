
function retornarDiasDelMesDeseado() {
    const imprimirResultado = document.getElementById("imprimirResultado")
    
    switch(Number(document.getElementById("obtenerMesDelUsuario").value)) {
        case 1:
            imprimirResultado.innerText = "El mes de Enero tiene 31 días"
        break;
        case 2:
            imprimirResultado.innerText = "El mes de Febrero tiene 28 días"
        break;
        case 3:
            imprimirResultado.innerText = "El mes de Marzo tiene 31 días"
        break;
        case 4:
            imprimirResultado.innerText = "El mes de Abril tiene 30 días"
        break;
        case 5:
            imprimirResultado.innerText = "El mes de Mayo tiene 31 días"
        break;
        case 6:
            imprimirResultado.innerText = "El mes de Junio tiene 30 días"
        break;
        case 7:
            imprimirResultado.innerText = "El mes de Julio tiene 31 días"
        break;
        case 8:
            imprimirResultado.innerText = "El mes de Agosto tiene 31 días"
        break;
        case 9:
            imprimirResultado.innerText = "El mes de Septiembre tiene 30 días"
        break;
        case 10:
            imprimirResultado.innerText = "El mes de Octubre tiene 31 días"
        break;
        case 11:
            imprimirResultado.innerText = "El mes de Noviembre tiene 30 días"
        break;
        case 12:
            imprimirResultado.innerText = "El mes de Diciembre tiene 31 días"
        break;
    }
}
