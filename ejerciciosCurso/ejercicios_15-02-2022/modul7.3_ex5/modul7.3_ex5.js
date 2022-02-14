const printResultOnDisplay = document.getElementById("printResultOnDisplay")

function checkUpperOrLowerCase() {
    const userText = document.getElementById('userText').value

    let itsUpperCase = false
    let itsLowerCase = false

    for (i = 0; i <= userText.length - 1; i++ ) {
        const lettersOfText = userText.charAt(i)

        if (lettersOfText === lettersOfText.toUpperCase()) {
            itsUpperCase = true
        }
        if (lettersOfText === lettersOfText.toLowerCase()) {
            itsLowerCase = true
        }
    }

    if (itsUpperCase && !itsLowerCase) {
        return printResultOnDisplay.innerText = 'The text consists only of UpperCase'
    }
    if (!itsUpperCase && itsLowerCase) {
        return printResultOnDisplay.innerText = 'The text consists only of LowerCase'
    }
    if (itsUpperCase && itsLowerCase) {
        return printResultOnDisplay.innerText = 'The text consists of LowerCase and UpperCase'
    }
}