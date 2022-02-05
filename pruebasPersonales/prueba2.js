
let numberUser = document.getElementById('userNumber');

numberUser.addEventListener('keyup', () => {
    let printResponse = document.getElementById('printResponse')
    printResponse.innerText = filterNumber()
    console.log(filterNumber())
});


function filterNumber() {


    if (numberUser.value === '1') {
        return 'uno'
    }
    if (Number(numberUser.value) === 2) {
        return 'dos'
    }
}

