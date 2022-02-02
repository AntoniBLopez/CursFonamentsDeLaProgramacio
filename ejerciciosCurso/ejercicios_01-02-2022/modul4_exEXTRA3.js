
function pcOptionSelection() {
    
    let numRandom = Math.floor(Math.random() * (4 - 1)) + 1
    
    if(numRandom === 1) {
        return "Rock"
    }
    if(numRandom === 2) {
        return "Paper"
    }
    if(numRandom === 3) {
        return "Scissors"
    }
}


function userOptionSelection() {
    
    const userNumber = Number(document.getElementById("userNumber").value)
    
    if(userNumber === 1) {
        return "Rock"
    }
    if(userNumber === 2) {
        return "Paper"
    }
    if(userNumber === 3) {
        return "Scissors"
    }
}

function optionSelectedUser() {
    const pcSelection = pcOptionSelection()
    const userSelection = userOptionSelection()

    console.log(`El pc selecciona ${pcSelection}`)
    console.log(`El usuario selecciona ${userSelection}`)
    
    const isTied = (pcSelection === "Rock" && userSelection === "Rock")  || (pcSelection === "Paper" && userSelection === "Paper") || (pcSelection === "Scissors" && userSelection === "Scissors")
    const iWon = (pcSelection === "Rock" && userSelection === "Scissors")  || (pcSelection === "Paper" && userSelection === "Rock") || (pcSelection === "Scissors" && userSelection === "Paper")
    const youWon = (pcSelection === "Paper" && userSelection === "Scissors")  || (pcSelection === "Scissors" && userSelection === "Rock") || (pcSelection === "Paper" && userSelection === "Scissors")
    const userDontWantToPlay = userSelection !== "Rock" || userSelection !== "Paper" || userSelection !== "Scissors"


    const printResult = document.getElementById("printResult")
    
    if (isTied) {
        printResult.innerText = `I ${pcSelection} and you ${userSelection}. Tied ✌️`
    }
    if (iWon) {
        printResult.innerText = `I ${pcSelection} and you ${userSelection}. I Won!`
    }
    if (youWon) {
        printResult.innerText = `I ${pcSelection} and you ${userSelection}. You Won!`
    }
    if(userDontWantToPlay) {
            printResult.innerText = "I understand you don't want to play. Bye"
        }
}