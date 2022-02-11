const printResultOnDisplay = document.getElementById("printResultOnDisplay")

function printFactorial() {

    const userNumber = Number(document.getElementById("userNumber").value)

    let resultFactorial = userNumber

    let lowerNumbersOfFactorial = userNumber -1

    for (i = 0; i < userNumber - 1; i++) {
        resultFactorial *= lowerNumbersOfFactorial

        lowerNumbersOfFactorial--
    }

    printResultOnDisplay.innerText = `El factorial de ${userNumber}! es: ${resultFactorial}`
}