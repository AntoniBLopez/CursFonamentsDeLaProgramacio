const printResultOnDisplay = document.getElementById("printResultOnDisplay")


function showStringBackwards() {
    let result = ''
    
    const userString = document.getElementById("userString").value

    for (i = userString.length - 1; i >= 0; i--) {
        result += userString.charAt(i)

    }

    printResultOnDisplay.innerText = `The reverse string is: ${result}`
}