const printResultOnDisplay = document.getElementById("printResultOnDisplay")

function convertDegrees() {
    const userCelsiusNumber = Number(document.getElementById("userCelsiusNumber").value)

    console.log(userCelsiusNumber)

    const fahrenheitDegrees = userCelsiusNumber * 9 / 5 + 32

    printResultOnDisplay.innerText = `Formula (${userCelsiusNumber}°C × 9 / 5) + ${userCelsiusNumber} = ${fahrenheitDegrees}ºF`
}