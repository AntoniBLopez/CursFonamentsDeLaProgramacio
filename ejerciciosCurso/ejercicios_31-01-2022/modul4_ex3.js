function obtenerBeca() {
    const edadUsuario = document.getElementById("edadUsuario").value
    const tituloUniversitario = document.getElementById("tituloUniversitario").value
    const prestacionPorDesempleo = document.getElementById("prestacionPorDesempleo").value

    if (edadUsuario >= 18) {
        if(tituloUniversitario === "si" || prestacionPorDesempleo === "si") {
            alert("¡Enhorabona! Has sigut seleccionat per obtenir la beca. ¡Mai deixis d'aprendre! 😊")
        }
        else {
            alert("Per obtenir la beca es necsari un títul universitari o estar a la tur")
        }
    }
    else if(edadUsuario < 18 && edadUsuario > 1) {
        alert("Per obtenir la beca es necessari ser major d'edat")
    }
}