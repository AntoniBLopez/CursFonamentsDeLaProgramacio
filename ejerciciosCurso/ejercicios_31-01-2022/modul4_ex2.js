
function obtenerResultado() {
    edadUsuario = document.getElementById("obtenerEdadUsuario").value

    if(edadUsuario == undefined || edadUsuario == "") {
        document.getElementById("resultadoPosicionEscolar").innerText = "Per veure la teva posició escolar has d'introduir correctament la teva edat"
    }
    else {
        if(edadUsuario <= 5) {
            document.getElementById("resultadoPosicionEscolar").innerText = "Preescolar"
        }
        if(edadUsuario > 5 && edadUsuario <= 11) {
            document.getElementById("resultadoPosicionEscolar").innerText = "Primària"
        }
        if(edadUsuario > 11 && edadUsuario <= 15) {
            document.getElementById("resultadoPosicionEscolar").innerText = "ESO"
        }
        if(edadUsuario > 15 && edadUsuario <= 17) {
            document.getElementById("resultadoPosicionEscolar").innerText = "Batxillerat"
        }
        if(edadUsuario > 17) {
            document.getElementById("resultadoPosicionEscolar").innerText = "Universitat"
        }
        if(edadUsuario >= 120) { // Extra para más diversión
            document.getElementById("resultadoPosicionEscolar").innerText = "La probabilitat de que no estiguis viu és molt alta"
        }
    }
}