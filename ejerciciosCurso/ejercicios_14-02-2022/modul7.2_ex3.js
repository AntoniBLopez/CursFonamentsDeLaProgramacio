const printResultOnDisplay = document.getElementById("printResultOnDisplay")

function showAsterisks() {

    const numberUserLines = Number(document.getElementById("numberUserLines").value)

    let cuantityOfAsterisks = ''
    
    for (i = 0; i < numberUserLines; i++) {
        
        let firstIteration = 0

        while (firstIteration <= i) {

            cuantityOfAsterisks += '*'
            firstIteration++
        }

        cuantityOfAsterisks += '\n'
    }

    for (i = 0; i < numberUserLines; i++) {

        let  secondIteration = numberUserLines - 1
        
        while (secondIteration > i) {
            
            cuantityOfAsterisks += '*'
            secondIteration--
        }
        cuantityOfAsterisks += '\n'
    }

    printResultOnDisplay.innerText = cuantityOfAsterisks
}