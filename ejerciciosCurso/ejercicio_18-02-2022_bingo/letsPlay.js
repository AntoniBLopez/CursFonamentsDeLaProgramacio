const printResult = document.getElementsByClassName("containerMain_result-h1")

const lineOne = document.getElementsByClassName("h2One")
const lineTwo = document.getElementsByClassName("h2Two")
const lineThree = document.getElementsByClassName("h2Three")

let randomNumber = 0

let checklistRandomNumbersToCardboard = []
let checklistRouletteRandomNumbers = []

let randomNumberEqualPreviousNumber = false

let randomCardboard;

let bingo = false

let bingoLineOne = false
let bingoLineTwo = false
let bingoLineThree = false

let cardboard = false
let roulette = false

const darkModeTag = document.querySelector(".containerHeader_aDarkMode")
const body = document.querySelector("body")

darkModeTag.addEventListener("click", e => {
    body.classList.toggle("darkMode")
})

const numbersOnCardboards = [
    document.getElementsByClassName("div1"),
    document.getElementsByClassName("div2"),
    document.getElementsByClassName("div3"),
    document.getElementsByClassName("div4"),
    document.getElementsByClassName("div5"),
    document.getElementsByClassName("div6"),
    document.getElementsByClassName("div7"),
    document.getElementsByClassName("div8"),
    document.getElementsByClassName("div9"),

    document.getElementsByClassName("div11"),
    document.getElementsByClassName("div12"),
    document.getElementsByClassName("div13"),
    document.getElementsByClassName("div14"),
    document.getElementsByClassName("div15"),
    document.getElementsByClassName("div16"),
    document.getElementsByClassName("div17"),
    document.getElementsByClassName("div18"),
    document.getElementsByClassName("div19"),

    document.getElementsByClassName("div21"),
    document.getElementsByClassName("div22"),
    document.getElementsByClassName("div23"),
    document.getElementsByClassName("div24"),
    document.getElementsByClassName("div25"),
    document.getElementsByClassName("div26"),
    document.getElementsByClassName("div27"),
    document.getElementsByClassName("div28"),
    document.getElementsByClassName("div29")
]


function varyCardboard(randomCardboard) {
    if (randomCardboard === 0) {

        numbersOnCardboards[0][0].innerText = "/"
        numbersOnCardboards[2][0].innerText = "/"
        numbersOnCardboards[3][0].innerText = "/"
        numbersOnCardboards[7][0].innerText = "/"

        numbersOnCardboards[11][0].innerText = "/"
        numbersOnCardboards[13][0].innerText = "/"
        numbersOnCardboards[15][0].innerText = "/"
        numbersOnCardboards[17][0].innerText = "/"

        numbersOnCardboards[18][0].innerText = "/"
        numbersOnCardboards[19][0].innerText = "/"
        numbersOnCardboards[21][0].innerText = "/"
        numbersOnCardboards[25][0].innerText = "/"
    }

    if (randomCardboard === 1) {

        numbersOnCardboards[1][0].innerText = "/"
        numbersOnCardboards[3][0].innerText = "/"
        numbersOnCardboards[5][0].innerText = "/"
        numbersOnCardboards[6][0].innerText = "/"

        numbersOnCardboards[9][0].innerText = "/"
        numbersOnCardboards[11][0].innerText = "/"
        numbersOnCardboards[12][0].innerText = "/"
        numbersOnCardboards[16][0].innerText = "/"

        numbersOnCardboards[18][0].innerText = "/"
        numbersOnCardboards[20][0].innerText = "/"
        numbersOnCardboards[23][0].innerText = "/"
        numbersOnCardboards[26][0].innerText = "/"
    }
}

function checkIfRandomNumberIsEqualToPreviousNumber(randomNumber) {

    if (cardboard) {
        checklistRandomNumbers = checklistRandomNumbersToCardboard
    }
    if (roulette) {
        checklistRandomNumbers = checklistRouletteRandomNumbers
    }

    for (value of checklistRandomNumbers) {

        if (value === randomNumber) {

            console.log("Ya lo tengo repetido")
            randomNumberEqualPreviousNumber = true
        }
    }
    cardboard = false
    roulette = false
}

function generateRandomNumbersToCardboard() {
    cardboard = true
    console.log("Empiezo")
    randomNumber = Math.ceil(Math.random() * 90)

    checkIfRandomNumberIsEqualToPreviousNumber(randomNumber)

    checklistRandomNumbersToCardboard.push(randomNumber)

    console.log(checklistRandomNumbersToCardboard)
}

function generateRouletteRandomNumbers() {
    roulette = true
    console.log("Empiezo")
    rouletteRandomNumber = Math.ceil(Math.random() * 90)

    checkIfRandomNumberIsEqualToPreviousNumber(rouletteRandomNumber)

    checklistRouletteRandomNumbers.push(rouletteRandomNumber)

    console.log(checklistRouletteRandomNumbers)
}

function addRandomNumbersToTheCardboard() {
    for (i = 0; i < numbersOnCardboards.length; i++) {

        generateRandomNumbersToCardboard()

        if (randomNumberEqualPreviousNumber) {
            i--

            randomNumberEqualPreviousNumber = false
        }
        else {
            console.log(`Número Final ${randomNumber}`)
            numbersOnCardboards[i][0].innerText = randomNumber
        }
    }
    checklistRandomNumbersToCardboard = []
}

function resetGame() {
    checklistRouletteRandomNumbers = []

    for (i = 0; i < numbersOnCardboards.length; i++) {
        numbersOnCardboards[i][0].style.background = "#FAEBD7"
        numbersOnCardboards[i][0].style.color = "black"
    }

    bingoLineOne = false
    bingoLineTwo = false
    bingoLineThree = false

    lineOne[0].style.display = "none"
    lineTwo[0].style.display = "none"
    lineThree[0].style.display = "none"

    if (bingo) {

        for (i = 0; i < numbersOnCardboards.length; i++) {
            numbersOnCardboards[i][0].style.background = "#E91E63"
            numbersOnCardboards[i][0].style.color = "white"
        }

        document.getElementsByClassName("containerMain_section")[0].style.boxShadow = "0px 0px 15px #E91E63"
        document.getElementsByClassName("containerHeader_picture")[0].style.boxShadow = "5px -5px 20px #E91E63"
        document.getElementsByClassName("containerMain_result-h1")[0].style.textAlign = "center"
    }
    else {
        printResult[0].innerText = ""
    }
}

function getCardboard() {

    bingo = false

    document.getElementsByClassName("containerMain_section")[0].style.boxShadow = "none"
    document.getElementsByClassName("containerHeader_picture")[0].style.boxShadow = "none"
    document.getElementsByClassName("containerMain_result-h1")[0].style.textAlign = "left"

    resetGame()

    addRandomNumbersToTheCardboard()
    
    randomCardboard = Math.round(Math.random())
    console.log(randomCardboard)

    varyCardboard(randomCardboard)
}

function checkLine() {
    
    if (randomCardboard === 0) {

        if (numbersOnCardboards[1][0].style.color === "white" && numbersOnCardboards[4][0].style.color === "white" &&
        numbersOnCardboards[5][0].style.color === "white" && numbersOnCardboards[6][0].style.color === "white" &&
        numbersOnCardboards[8][0].style.color === "white") {

            lineOne[0].style.display = "inline-block"

            bingoLineOne = true
        }

        if (numbersOnCardboards[9][0].style.color === "white" && numbersOnCardboards[10][0].style.color === "white" &&
        numbersOnCardboards[12][0].style.color === "white" && numbersOnCardboards[14][0].style.color === "white" &&
        numbersOnCardboards[16][0].style.color === "white") {

            lineTwo[0].style.display = "inline-block"

            bingoLineTwo = true
        }

        if (numbersOnCardboards[20][0].style.color === "white" && numbersOnCardboards[22][0].style.color === "white" &&
        numbersOnCardboards[23][0].style.color === "white" && numbersOnCardboards[24][0].style.color === "white" &&
        numbersOnCardboards[26][0].style.color === "white") {

            lineThree[0].style.display = "inline-block"

            bingoLineThree = true
        }
    }

    if (randomCardboard === 1) {

        if (numbersOnCardboards[0][0].style.color === "white" && numbersOnCardboards[2][0].style.color === "white" &&
        numbersOnCardboards[4][0].style.color === "white" && numbersOnCardboards[7][0].style.color === "white" &&
        numbersOnCardboards[8][0].style.color === "white") {

            lineOne[0].style.display = "inline-block"

            bingoLineOne = true
        }

        if (numbersOnCardboards[10][0].style.color === "white" && numbersOnCardboards[13][0].style.color === "white" &&
        numbersOnCardboards[14][0].style.color === "white" && numbersOnCardboards[15][0].style.color === "white" &&
        numbersOnCardboards[17][0].style.color === "white") {

            lineTwo[0].style.display = "inline-block"

            bingoLineTwo = true
        }

        if (numbersOnCardboards[19][0].style.color === "white" && numbersOnCardboards[21][0].style.color === "white" &&
        numbersOnCardboards[22][0].style.color === "white" && numbersOnCardboards[24][0].style.color === "white" &&
        numbersOnCardboards[25][0].style.color === "white") {

            lineThree[0].style.display = "inline-block"

            bingoLineThree = true
        }
    }
}


function checkBingo() {

    if (bingoLineOne && bingoLineTwo && bingoLineThree) {

        bingo = true

        printResult[0].innerText = "BINGOOOOOOOOOO!"

        resetGame()
    }
}

function getResult() {

    do {
        randomNumberEqualPreviousNumber = false

        generateRouletteRandomNumbers()

    } while (randomNumberEqualPreviousNumber === true)
    
    console.log(`Número Final ${rouletteRandomNumber}`)

    if (bingo) {}
    else { printResult[0].innerText = `The ${rouletteRandomNumber}` }
        
    for (i = 0; i < numbersOnCardboards.length; i++) {
    
        if (Number(numbersOnCardboards[i][0].innerText) === rouletteRandomNumber) {
            console.log("Ha coincidido")
            numbersOnCardboards[i][0].style.background = "#E91E63"
            numbersOnCardboards[i][0].style.color = "white"

            checkLine()
            checkBingo()
        }
    }
}