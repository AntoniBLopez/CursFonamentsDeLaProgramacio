function obtenerDatosUsuario () {
    const nombreUsuario = prompt("Introduce tu Nombre y Apellidos:", "Ejemplo: Elon Musk")
    const edadUsuario = prompt("Introduce tu Edad:", "Ejemplo: 37")

    if (nombreUsuario == null || nombreUsuario == "") {
        alert("Para poder continuar debes de intoducir tu Nombre y Apellidos")
    }
    else {
        if (edadUsuario == null || edadUsuario == "") {
            alert("Para poder continuar debes de introducir tu Edad")
        }
        else {
            edadUsuario < 18 ? alert("Eres menor de edad") : alert("Eres mayor de edad")

            console.log(`${nombreUsuario}, ${edadUsuario} años`)

            document.getElementById("datosUsuarioFinal").innerText = `
            ${nombreUsuario}, ${edadUsuario} años.`
            
            alert(`Hola ${nombreUsuario}, haz click en Aceptar para imprimir tu nombre y edad en el navegador :P`)
        }
    }

}