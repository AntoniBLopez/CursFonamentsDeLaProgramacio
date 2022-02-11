const printResultOnDisplay = document.getElementById("printResultOnDisplay")

function showAsterisks() {
    const numberUserLines = Number(document.getElementById("numberUserLines").value)
    
    let cuantityOfAsterisks = ''
    
    for (i = 0; i < numberUserLines; i++) {
        let  j = numberUserLines

        while (j > i) {
            
            cuantityOfAsterisks += '*'

            j--
        }
        cuantityOfAsterisks += '\n'
        
    }

    printResultOnDisplay.innerText = cuantityOfAsterisks
}