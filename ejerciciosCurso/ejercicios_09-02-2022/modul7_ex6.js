const printResultOnDisplay = document.getElementById("printResultOnDisplay")

function createMltiplicationTable() {
    const userNumber = parseInt(document.getElementById("userNumber").value)

    if (!numberIsValid(userNumber)) {
        return printResultOnDisplay.innerText = 'The number entered is not valid.'
    }

    let resultMultiplicationTable = ''

    for (i = 1; i <= 10; i++) {
        resultMultiplicationTable += `${userNumber} x ${i} = ${userNumber * i}\n`
    }
    printResultOnDisplay.innerText = resultMultiplicationTable
}

function numberIsValid(userNumber) {
    if (userNumber <= 0 || userNumber > 10) {
        return false
    }
    if (isNaN(userNumber)) {
        return false
    }
    return true
}