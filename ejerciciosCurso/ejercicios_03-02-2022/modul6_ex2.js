//                               EXERCICE TO DO

// Aquest programa calcula l'edat mitjana d'un número de persones introduït per teclat.

// S'ha de crear una funció que s'encarregui de demanar les edats a l'usuari i de calcular l'edat mitjana.

// La funció rebrà per paràmetre el nº de persones a qui ha de demanar l'edat.
// L'edat de les persones només serà vàlida si està compresa entre 0 i 120 anys.
// La mitjana de les edats introduïdes s'ha de retornar per la funció (return).


function calculateMedian () {
    const numberOfPepole = prompt("How many people do you want to add?")

    agesOfPeopleFunction(numberOfPepole)
    
}


function agesOfPeopleFunction (numberOfPepole) {

    const agesOfPeople = []
    
    for (i = 1; i <= numberOfPepole; i++) {

        const agesAddedByUser = prompt(`Add person's age ${i}`)

        agesOfPeople.push(agesAddedByUser)

        if (validateAges(agesAddedByUser)) {
            return alert("To be able to continue remember the conditions")
        }
        
        if(i === Number(numberOfPepole)) {

            function ordenate(a,b){return a - b}

            agesOfPeople.sort(ordenate)

            const calculateMedianOfAges = Math.floor(agesOfPeople.length / 2)

            if (validateIfIsEven(agesOfPeople.length)) {

                const addTwoMiddleNumbers = Number(agesOfPeople[calculateMedianOfAges]) + Number(agesOfPeople[calculateMedianOfAges - 1])

                const medianResult = Math.round(addTwoMiddleNumbers / 2)

                return alert(`The result of the median age is ${medianResult} years `)
            }

            const medianResult = Math.round(agesOfPeople[calculateMedianOfAges])

            return alert(`The result of the median age is ${medianResult} years`)

        }
    }
    alert("Remember that to continue you only have to write positive and integer numbers")
}


function validateAges(agesArrayPosition) {

    if (Number(agesArrayPosition) < 0 || Number(agesArrayPosition) > 120) {
        return true;
    }
    if (isNaN(agesArrayPosition)) {
        return true;
    }
    return false;
}

function validateIfIsEven(quantityElementsOnArray) {
    const isEven = quantityElementsOnArray % 2

    if (isEven === 0) {
        return true
    }
    return false
}
