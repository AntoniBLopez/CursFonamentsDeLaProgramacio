
function calculateMean() {
    const numberOfStudients = Number(document.getElementById("numberOfStudients").value)

    const studientNotesList = []
    let countIterations = 1
    let continueProcess = true

    while (countIterations <= numberOfStudients) {
        const studientsNote = Number(prompt(`Student note ${countIterations}`))

        if (validateNotes(studientsNote)) {
            alert("If you want continue remember the Guide & Rules. You must start again")
            
            continueProcess = false
            break
        }

        studientNotesList.push(studientsNote)
        countIterations++
    }

    if (continueProcess) {
        let sumOfNotes = 0
    
        for (i = 0; i < studientNotesList.length; i++) {
            sumOfNotes += studientNotesList[i]
        }
    
        const meanOfTheNotes = Math.round(sumOfNotes / studientNotesList.length)
        displayMessages(meanOfTheNotes)
    }
}

function displayMessages(meanOfTheNotes) {
    const printMessageOnDisplay = document.getElementById("printMessageOnDisplay")

    console.log(meanOfTheNotes)

    if (meanOfTheNotes < 5) {
        return printMessageOnDisplay.innerText = 'The mean of the notes of the class is suspended. Students must solve their doubts by asking and work more.'
    }
    if (meanOfTheNotes >= 5 && meanOfTheNotes < 7) {
        return printMessageOnDisplay.innerText = 'The mean of the notes of the class is good, but the students should improve their personal work.'
    }
    if (meanOfTheNotes >= 7 && meanOfTheNotes <= 10) {
        return printMessageOnDisplay.innerText = '🥳Congratulations! The mean of the notes of the class corresponds to the effort made🎉'
    }
}

function validateNotes(studientsNote) {
    if (studientsNote < 0 || studientsNote > 10) {
        return true
    }
    if (isNaN(studientsNote)) {
        return true
    }
    return false
}