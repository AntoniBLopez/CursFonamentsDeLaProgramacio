
const printResultOnDisplay = document.getElementById("printResultOnDisplay")

function calculateAndPrintYear() {
    const userYearNumber = Number(document.getElementById("userYearNumber").value)

    if (userYearNumber % 400 === 0 || userYearNumber % 4 === 0 && userYearNumber % 100 != 0) {
        return printResultOnDisplay.innerText = 'Es bisiesto'
    }

    return printResultOnDisplay.innerText = 'No es bisiesto'
}