
const printResultOnDisplay = document.getElementById("printResultOnDisplay")

function calculateOddOrEven() {
    const userNumber = document.getElementById("userNumber").value

    const evenOrOdd = Number(userNumber % 2)
    
    if (validateNumber(userNumber)) {

        if (evenOrOdd === 0) {
            return printResultOnDisplay.innerText = `The number is even`
        }
        if (evenOrOdd === 1) {
            return printResultOnDisplay.innerText = `The number is odd`
        }
    }
    return printResultOnDisplay.innerText = `Enter a valid number:\n -The number must be integer`
}

function validateNumber(userNumber) {
    if (isNaN(userNumber) || userNumber === '') {
        return false
    }
    return true
}