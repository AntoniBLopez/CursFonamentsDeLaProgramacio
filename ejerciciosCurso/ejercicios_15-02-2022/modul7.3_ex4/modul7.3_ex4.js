const printResultOnDisplay = document.getElementById("printResultOnDisplay")

function showIfLetterIsCorrect() {
    const userDNI = document.getElementById("userDNI").value

    const positionOfLetterAccordingResult = userDNI.slice(0, userDNI.length - 1) % 23

    const numberToLetterConverter = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

    const letterOfDNIUser = userDNI.charAt(userDNI.length - 1)

    const correctLetterOfDNI = numberToLetterConverter[positionOfLetterAccordingResult]

    if (correctLetterOfDNI === letterOfDNIUser) {
        return printResultOnDisplay.innerText = '✔️La letra es la correcta'
    }
    return printResultOnDisplay.innerText = `❌La letra no es la correcta, la letra correcta és: ${correctLetterOfDNI}`
}