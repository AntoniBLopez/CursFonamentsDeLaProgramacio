const printResultOnDisplay = document.getElementById('printResultOnDisplay')
const printArrayOnDisplay = document.getElementById('printArrayOnDisplay')

function showResultSum() {
    
    const numbersUser = document.getElementById('numbersUser').value
    const numbersList = numbersUser.split(' ')

    let numbersEven = 0
    let numbersOdd = 0

    for (i = 0; i < numbersList.length; i++) {
        
        if (numbersList[i] % 2 === 0) {
            numbersEven += Number(numbersList[i])
        }
        if (numbersList[i] % 2 === 1) {
            numbersOdd += Number(numbersList[i])
        }
    }

    printArrayOnDisplay.innerText = `The array is: ${numbersList}`
    printResultOnDisplay.innerText = `The sum of all even numbers is: ${numbersEven} && The sum of all odd numbers is: ${numbersOdd}`
}