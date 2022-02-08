//                                Exercice

// Aquesta línia de codi: Math.ceil((Math.random() * 10));  Retorna un número entre el 0 i el 10 de forma aleatòria.

// L’exercici consisteix a què l’usuari ha d'endevinar el número escollit aleatòriament pel programa.

// El programa, demana números a l’usuari fins que aquest encerti el número aleatori generat pel programa.

// Un cop l’usuari ha endevinat el número, es mostrarà per pantalla el següent missatge: “Enhorabona, el número era X”


function startTheGame() {
    const displayOnScreen = document.getElementById("displayOnScreen")

    const pcRandomNumber = Math.ceil((Math.random() * 10))
    console.log(pcRandomNumber)

    let userNumber = 20

    while (pcRandomNumber != userNumber) {
        userNumber = Number(prompt("Choose the number you think is correct"))
        if (validateNumber(userNumber)) {
            alert('Remember that the number must be a number positive integer from 0 to 10')
        }
    }

    displayOnScreen.innerText = `🥳 Congratulations the number is ${pcRandomNumber}!`
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