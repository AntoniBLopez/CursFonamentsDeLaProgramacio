//                                        Exercici

// Has de modificar el programa de les beques (ara el programa només ha de poder donar 5 beques).

// El programa anirà demanant les dades dels alumnes fins que es donin aquestes 5 beques.
// Un cop el programa hagi assignat les 5 beques s’ha de mostrar per pantalla els noms dels 5 alumnes que tenen beca.

let llistatAlumnes = []

let comptadorAlumnesAfegits = 1

function afegirAlumne() {

    const nomUsuari = document.getElementById("nomUsuari").value
    const edatUsuari = document.getElementById("edatUsuari").value
    const titulUniversitari = document.getElementById("titulUniversitari").value
    const actualmentTur = document.getElementById("actualmentTur").value
    const alumneAfegit = document.getElementById("alumneAfegit")
    const escriureMissatge = document.getElementById("escriureMissatge")

    let contingut = `Participants: ${comptadorAlumnesAfegits}\n✨Les persones afortunades son:\n`

    if (validarCondicions(edatUsuari, titulUniversitari, actualmentTur)) {

        llistatAlumnes.push(nomUsuari)
        
        console.log(llistatAlumnes)
        
        comptadorAlumnesAfegits++
        
        alumneAfegit.innerText = `Alumne ${comptadorAlumnesAfegits}`
    }
    else {
        comptadorAlumnesAfegits++

        alumneAfegit.innerText = `Alumne ${comptadorAlumnesAfegits}`
    }

    if (llistatAlumnes.length === 5){
        alert("🥳Enhorabona! Ja han estat lliurades les 5 beques, fes click a Aceptar per veure els noms dels 5 afortunats")

        for(const persones of llistatAlumnes) {
            contingut += persones + '\n'
        }

        escriureMissatge.innerText = contingut

        reiniciarProces(alumneAfegit)
    }
}

function validarCondicions (edatUsuari, titulUniversitari, actualmentTur) {

    if (edatUsuari >= 18 && edatUsuari <= 120 && (titulUniversitari === "si" || actualmentTur === "si")) {
        return true
    }
    return false
}

function reiniciarProces(alumneAfegit) {
    llistatAlumnes = []
    comptadorAlumnesAfegits = 1

    alumneAfegit.innerText = `Alumne ${comptadorAlumnesAfegits}`
}