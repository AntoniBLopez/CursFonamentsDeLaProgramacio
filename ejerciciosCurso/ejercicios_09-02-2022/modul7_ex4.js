function calculateNegativeNumber() {
    const firstUserNumber = Number(document.getElementById("firstUserNumber").value)
    const secondUserNumber = Number(document.getElementById("secondUserNumber").value)

    const printResultOnDisplay = document.getElementById("printResultOnDisplay")

    if (firstUserNumber < 0 && secondUserNumber < 0) {
        return printResultOnDisplay.innerText = ''
    }
    if (firstUserNumber < 0 || secondUserNumber < 0) {
        return printResultOnDisplay.innerText = 'One of the two numbers is negative.'
    }
    else {
        return printResultOnDisplay.innerText = ''
    }
}