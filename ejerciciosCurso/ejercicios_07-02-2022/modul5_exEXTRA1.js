let randomNumer = Math.ceil((Math.random() * 500 ))

console.log(randomNumer)

let warmWarmLower = randomNumer - 15
let warmWarmUpper = randomNumer + 15

let coldColdLower = randomNumer - 50
let coldColdUpper = randomNumer + 50

const printResult = document.getElementById("printResult")
const continuePlaying = document.getElementById("continuePlaying")

function start () {

    blankTextOfContinuePlaying()

    const userNumber = Number(document.getElementById("userNumber").value)

    const userWin = randomNumer === userNumber

    if (validateNumber(userNumber)) {
        return printResult.innerText = ""
    }
    if (userWin) {
        printResult.innerText = "🥳 Congratulations! You guessed the correct number 🎉"
        restartGame()
    }
    if (!userWin) {
        letsPlay(userNumber)
    }
}

function validateNumber(userNumber) {
    if (userNumber === 0) {
        return true
    }
    return false
}

function letsPlay(userNumber) {

    if (userNumber < randomNumer && userNumber > warmLower) {
        return printResult.innerText = "🔥Hot Hot🔥 Your number is smaller"
    }
    if (userNumber > randomNumer && userNumber < warmUpper) {
        return printResult.innerText = "🔥Hot Hot🔥 Your number is bigger"
    }
    if (userNumber < randomNumer && userNumber < warmLower && userNumber > coldLower) {
        return printResult.innerText = "😃Warm Warm😃 Your number is smaller"
    }
    if (userNumber > randomNumer && userNumber > warmUpper && userNumber < coldUpper) {
        return printResult.innerText = "😃Warm Warm😃 Your number is biger"
    }
    if (userNumber < randomNumer && userNumber < coldLower) {
        return printResult.innerText = "🧊Cold Cold🧊 Your number is smaller"
    }
    if (userNumber > randomNumer && userNumber > coldUpper) {
        return printResult.innerText = "🧊Cold Cold🧊 Your number is biger"
    } 
}

function restartGame() {
    continuePlaying.innerText = "( If you want to continue playing, continue )"
    randomNumer = Math.ceil((Math.random() * 500 ))

    warmWarmLower = randomNumer - 15
    warmWarmUpper = randomNumer + 15
    
    coldColdLower = randomNumer - 50
    coldColdUpper = randomNumer + 50

    console.log(randomNumer)
}

const blankTextOfContinuePlaying = () => continuePlaying.innerText = ""