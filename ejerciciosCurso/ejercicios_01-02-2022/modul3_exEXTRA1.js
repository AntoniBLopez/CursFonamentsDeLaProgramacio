function obtenerDobleYTriple() {
    const numeroUsuario = document.getElementById("numeroUsuario").value
    const imprimirResultado = document.getElementById("imprimirResultado")

    const obtenerNumeroDoble = numeroUsuario * 2
    const obtenerNumeroTriple = numeroUsuario * 3

    return imprimirResultado.innerText = `- El Doble de tu numero es: ${obtenerNumeroDoble}
    - El Triple de tu numero es: ${obtenerNumeroTriple}`
}