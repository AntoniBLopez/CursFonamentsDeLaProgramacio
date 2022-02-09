function calculateMean() {
    const note1 = Number(prompt("Note one"))
    const note2 = Number(prompt("Note two"))
    const note3 = Number(prompt("Note three"))

    if (validateNotes(note1, note2, note3)) {
        alert("If you want continue remember the rules")
    }
    
    displayMessage(note1, note2, note3)
}

function validateNotes(note1, note2, note3) {
    if (note1 < 0 || note1 > 10) {
        return true
    }
    if (note2 < 0 || note2 > 10) {
        return true
    }
    if (note3 < 0 || note3 > 10) {
        return true
    }
    if (isNaN(note1) || isNaN(note2) || isNaN(note3)) {
        return true
    }
    return false
}

function displayMessage(note1, note2, note3) {

    const printMessageOnDisplay = document.getElementById("printMessageOnDisplay")
    const meanOfTheNotes = Math.round((note1 + note2 + note3) / 3)

    console.log(`The mean of notes is ${meanOfTheNotes}`)

    if (meanOfTheNotes < 5) {
        return printMessageOnDisplay.innerText = 'You have not passed the course. You have to recover.'
    }
    if (meanOfTheNotes >= 5 && meanOfTheNotes <= 7) {
        return printMessageOnDisplay.innerText = 'Congratulations! You have passed but you must continue practicing'
    }
    if (meanOfTheNotes > 7) {
        return printMessageOnDisplay.innerText = '💯Congratulations! You have passed the course! Go to the next level now! LETS GO TO THE MARS PLANET!🌑'
    }
}