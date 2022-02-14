const printResultOnDisplay = document.getElementById("printResultOnDisplay")

function showIfIsAPalindrome() {
    let resultReverse = ''
    
    const userContentValue = document.getElementById("userContentValue").value

    for (i = userContentValue.length - 1; i >= 0; i--) {
        resultReverse += userContentValue.charAt(i)
    }

    if (userContentValue === resultReverse) {
        return printResultOnDisplay.innerText = `✔️The content is a palindrome\n -\nStandard: ${userContentValue}\nReverse: ${resultReverse}`
    }

    return printResultOnDisplay.innerText = `❌The content is not a palindrome\n =\nStandard: ${userContentValue}\nReverse: ${resultReverse}`
}