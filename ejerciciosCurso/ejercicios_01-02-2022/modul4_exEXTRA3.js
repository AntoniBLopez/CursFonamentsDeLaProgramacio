const gameObjects = ["Rock", "Paper", "Scissors"]

function gameOptionsSelection(player) {

    if(player === 1) {
        return gameObjects[0]
    }
    if(player === 2) {
        return gameObjects[1]
    }
    if(player === 3) {
        return gameObjects[2]
    }
}

function optionSelectedUser() {
    
    let numRandom = Math.floor(Math.random() * (4 - 1)) + 1
    const userNumber = Number(document.getElementById("userNumber").value)
    
    const userSelection = gameOptionsSelection(userNumber)
    const pcSelection = gameOptionsSelection(numRandom)
    
    console.log(`El pc selecciona ${pcSelection}`)
    console.log(`El usuario selecciona ${userSelection}`)
    
    const isTied = pcSelection === userSelection
    const pcWon = (pcSelection === "Rock" && userSelection === "Scissors")  || (pcSelection === "Paper" && userSelection === "Rock") || (pcSelection === "Scissors" && userSelection === "Paper")
    const userWon = (pcSelection === "Rock" && userSelection === "Paper")  || (pcSelection === "Paper" && userSelection === "Scissors") || (pcSelection === "Scissors" && userSelection === "Rock")
    const userDontWantToPlay = userSelection === "Rock" || userSelection === "Paper" || userSelection === "Scissors"

    const printResult = document.getElementById("printResult")
    
    if (isTied) {
        printResult.innerText = `I ${pcSelection} and you ${userSelection}. Tied ✌️`
    }
    if (pcWon) {
        printResult.innerText = `I ${pcSelection} and you ${userSelection}. I Won!`
    }
    if (userWon) {
        printResult.innerText = `I ${pcSelection} and you ${userSelection}. You Won!`
    }
    if(!userDontWantToPlay) {
        printResult.innerText = "I understand you don't want to play. Bye"
    }
}