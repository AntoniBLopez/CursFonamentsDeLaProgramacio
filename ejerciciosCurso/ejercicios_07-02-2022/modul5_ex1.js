function printWords() {
    const numberOfWords = Number(document.getElementById("numberOfWords").value)
    const displayOnScreen = document.getElementById("displayOnScreen")

    const arrayOfWords = []
    let content = "The words in the array are:\n"

    for (i = 1; i <= numberOfWords; i++) {
        const userWords = prompt(`Enter word ${i}`)

        arrayOfWords.push(userWords)
    }

    for(const word of arrayOfWords) {
        content += word + '\n'
    }

    displayOnScreen.innerText = content;

    console.log(arrayOfWords)
}