function addCompressedNumbers() {
    const numberOne = Number(document.getElementById("numberOne").value)
    const numberTwo = Number(document.getElementById("numberTwo").value)
    const displayOnScreen = document.getElementById("displayOnScreen")

    const numbersCompressed = []
    let add = 0

    if (validateNumbers(numberOne, numberTwo)) {
        return displayOnScreen.innerText = "The first number must be greater than the second number"
    }

    for (i = numberOne; i <= numberTwo; i++) {
        numbersCompressed.push(i)

        if (i === numberTwo) {
            
            for (loop = 0; loop < numbersCompressed.length; loop++) {
                add += numbersCompressed[loop]
            }
        }
    }

    let content = `${numberOne} & ${numberTwo} => `

    for (const elementsOnArray of numbersCompressed) {
        content += `${elementsOnArray} + `

        if (elementsOnArray === numberTwo - 1){
            content += `${numberTwo} = ${add}`
            break
        }
    }

    displayOnScreen.innerText = content
}

function validateNumbers(numberOne, numberTwo) {
    if (numberTwo < numberOne) {
        return true
    }
    if (numberOne === numberTwo) {
        return true
    }
    return false
}