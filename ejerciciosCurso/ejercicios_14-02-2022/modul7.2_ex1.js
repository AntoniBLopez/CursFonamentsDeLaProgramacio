const printResultOnDisplay = document.getElementById("printResultOnDisplay")

// He añadido un contador de clicks para que el segundo y tercer click que se haga en el botón
// muestre algo distinto a los asteriscos y así hacerlo más divertido, 
// todos los demás clicks cumplen con el objetivo planteado en el ejercicio
let countClicks = 0

function showAsterisks() {
    const numberUserLines = Number(document.getElementById("numberUserLines").value)
    
    let cuantityOfAsterisks = ''
    
    for (i = 0; i < numberUserLines; i++) {
        let  j = 0

        while (j <= i) {
            if (countClicks != 1 && countClicks !=2) {
                cuantityOfAsterisks += '*'
            }
            if (countClicks === 1) {
                cuantityOfAsterisks += '🌕'
            }
            if (countClicks === 2) {
                cuantityOfAsterisks += '❤️'
            }
            j++
        }
        cuantityOfAsterisks += '\n'
        
    }

    if (countClicks != 1 && countClicks !=2) {
        printResultOnDisplay.innerText = cuantityOfAsterisks
    }
    if (countClicks === 1) {
        printResultOnDisplay.innerText = 'To The MOON!\n' + cuantityOfAsterisks
    }
    if (countClicks === 2) {
        printResultOnDisplay.innerText = 'Love\n' + cuantityOfAsterisks
    }

    countClicks++
}