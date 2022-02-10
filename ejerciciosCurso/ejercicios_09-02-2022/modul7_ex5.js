const printEvenNumbers = document.getElementById("printEvenNumbers")

let result = ''

for (i = 99; i > 0; i--) {

    if (i % 2 === 0) {
        result += `${i}\n`
    }
}

printEvenNumbers.innerText = result