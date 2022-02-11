const printResultOnDisplay = document.getElementById("printResultOnDisplay")

function printPrimeNumber() {
    const userNumber = Number(document.getElementById("userNumber").value)

    let numberIsPrime = true

    for (i = 2; i < userNumber; i++) {
        if (userNumber % i === 0){
            
            numberIsPrime = false
        }
    }

    if (numberIsPrime) {
        return printResultOnDisplay.innerText = `El número ${userNumber} es primo ✔️`
    }
    if (!numberIsPrime) {
        return printResultOnDisplay.innerText = `El número ${userNumber} no es primo ❌`
    }
}