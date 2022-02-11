
const printResultOnDisplay = document.getElementById("printResultOnDisplay")

function printFibonacciSequence() {
    const userNumber = Number(document.getElementById("userNumber").value)

    let firstNumberFibonacciSequence = 0
    let secondNumberFibonacciSequence = 1
    let convertSecondNumberToFirstNumber;

    let showResult = '0, 1, '

    for (i = 1; i < userNumber; i++) {
        convertSecondNumberToFirstNumber = secondNumberFibonacciSequence

        secondNumberFibonacciSequence += firstNumberFibonacciSequence

        firstNumberFibonacciSequence = convertSecondNumberToFirstNumber

        showResult += `${secondNumberFibonacciSequence}, `
    }

    printResultOnDisplay.innerText = showResult
}
