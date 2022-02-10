const printResultOnDisplay = document.getElementById("printResultOnDisplay")

function createSquareWithCharacters() {
    const userLengthNumber = Number(document.getElementById("userLengthNumber").value)
    const userCharacter = document.getElementById("userCharacter").value

    let horizontalPartSquare = ''
    let wholeSquare = ''

    for (i = 1; i <= userLengthNumber; i++) {

        horizontalPartSquare += `${userCharacter}`

        if (i === userLengthNumber) {

            for (a = 1; a <= userLengthNumber; a++) {
                wholeSquare += `${horizontalPartSquare}\n`
            }
        }
    }
    return printResultOnDisplay.innerText = wholeSquare
}