//                                                Exercise

// Has de modificar el programa anterior per afegir una nova funcionalitat: establir un número màxim de 5 intents.

// Si l’usuari encerta el número escollit pel programa abans d'aquests 5 intents, el programa mostra el següent missatge per pantalla: “Enhorabona, el número és X i has necessitat Y intents per encertar-lo”.

// Si no encerta el número abans de 5 intents, el programa mostra per pentalla: "Has utilitzat massa intents! El número és X ".


function startTheGame() {
    const displayOnScreen = document.getElementById("displayOnScreen")

    const pcRandomNumber = Math.ceil((Math.random() * 10))
    console.log(pcRandomNumber)

    let userNumber = 20
    let attempts = 0

    while (pcRandomNumber != userNumber) {
        userNumber = Number(prompt("Choose the number you think is correct"))
        
        attempts++
        if (validateNumber(userNumber)) {
            alert('Remember that the number must be a number positive integer from 0 to 10')
        }

        if (userNumber === pcRandomNumber) {
            displayOnScreen.innerText = `🥳 Congratulations, the number is ${pcRandomNumber} and you have needed ${attempts} attempts to get it right!`
            break
        }

        if (attempts >= 5) {
            alert(`You have used too many attempts! The number is ${pcRandomNumber}`)
            break
        }
        
    }
}

function validateNumber(userNumber) {
    if (userNumber < 0 || userNumber > 10) {
        return true
    }
    if (userNumber === null) {
        return true
    }
    if (isNaN(userNumber)) {
        return true
    }
    return false
}