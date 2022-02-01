const coberturaLitro = 12; // Son los metros cuadrados que podemos pintar con 1 litro de pintura, añadiendo una sola capa


function resultadoLitrosPintura() {
    const tamañoAltoParedUsuario = document.getElementById("tamañoAltoParedUsuario").value
    const tamañoAnchoParedUsuario = document.getElementById("tamañoAnchoParedUsuario").value
    const cantidadCapasPintura = document.getElementById("cantidadCapasPintura").value

    const imprimirResultado = document.getElementById("imprimirResultado")

    const metrosCuadradosParedUsuario = tamañoAltoParedUsuario * tamañoAnchoParedUsuario

    const litrosPinturaTotal = metrosCuadradosParedUsuario / coberturaLitro * cantidadCapasPintura

    if(tamañoAltoParedUsuario === tamañoAnchoParedUsuario) {
        imprimirResultado.innerText = "Recuerda que la pared tiene que ser rectangular"
    }
    if(tamañoAltoParedUsuario !== tamañoAnchoParedUsuario) {
        imprimirResultado.innerText = `Son necesarios ${litrosPinturaTotal.toFixed(2)} litros de pintura para pintar toda la pared en ${cantidadCapasPintura} capa/s`
        
        console.log(`Los metros cuadrados de la pared del usuario según el tamaño introducido son de: ${metrosCuadradosParedUsuario}m²`)
        console.log(`Un litro de pintura nos sirve para pintar una sola capa de ${coberturaLitro}m² de una pared `)
        console.log(`Por lo tanto, son necesarios ${litrosPinturaTotal.toFixed(2)} litros de pintura para pintar toda la pared en ${cantidadCapasPintura} capa/s`)
    }
}
