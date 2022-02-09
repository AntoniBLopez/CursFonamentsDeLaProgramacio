
function showL() {
    const userSelectedHeight = Number(document.getElementById("userSelectedHeight").value)
    const writingFrame = document.getElementById("writingFrame")

    let asterisksFormingAnL = "";
    let countVerticalIterations = 1
    
    while (countVerticalIterations < userSelectedHeight) {
        
        asterisksFormingAnL += '*\n'
        countVerticalIterations++
    }
    
    const numberOfHorizontalAsterisks = horizontalLengthOfL(userSelectedHeight)
    let countHorizontalIterations = 0

    while (countHorizontalIterations < numberOfHorizontalAsterisks) {

        asterisksFormingAnL += '*'
        countHorizontalIterations++
    }

    writingFrame.innerText = asterisksFormingAnL
}

function horizontalLengthOfL(userSelectedHeight) {

    return Math.floor(userSelectedHeight / 2 + 1)
}



function showHeartsBySurprise() {
    const userSelectedHeight = Number(document.getElementById("userSelectedHeight").value)
    const writingFrame = document.getElementById("writingFrame")

    let heartsFormingAnL = "";
    let countVerticalIterations = 1
    
    while (countVerticalIterations < userSelectedHeight) {
        
        heartsFormingAnL += '❤️\n'
        countVerticalIterations++
    }
    
    const numberOfHorizontalHearts = horizontalLengthOfHearts(userSelectedHeight)
    let countHorizontalIterations = 0

    while (countHorizontalIterations < numberOfHorizontalHearts) {

        heartsFormingAnL += '❤️'
        countHorizontalIterations++
    }

    writingFrame.innerText = heartsFormingAnL
}

function horizontalLengthOfHearts(userSelectedHeight) {

    return Math.floor(userSelectedHeight / 2 + 1)
}