//                               EXERCISES

// a. Crea un mètode sense paràmetres i sense retorn que imprimeixi per consola “sóc un mètode”.

// Sortida: sóc un mètode

console.log('Exercise a:')

const printMethodWithConsole = () => console.log("I'm a method")

printMethodWithConsole()



// b. Crea un mètode que rebi un array de números com a paràmetre, imprimeixi el número més gran per consola i retorni l’índex de l’arrayList on es troba el número més petit. Crea un array de 5 números i crida al mètode que acabes de crear per imprimir el número més petit de l’array.

// Sortida (amb aquests números dintre de l’arrayList “8, 12, 5, 22, 6”:

//     Número més gran 22 (això ho imprimeix el propi mètode)

//     Número més petit 5 (això ho imprimeix on s'ha fet la crida al mètode)

console.log('Exercise b:')

const arrayOfNumbers = [8, 12, 5, 22, 6]

function printLargestNumber (largestNumber) {

    function ordenate(a,b){return a - b}

    const ordenateList = largestNumber.sort(ordenate)

    console.log(`The largest number is ${ordenateList[ordenateList.length - 1]}`)

    console.log(`The smallest number is ${ordenateList[0]} `)

    return console.log(`The index of the smallest number is ${ordenateList.indexOf(5)}`)
}

printLargestNumber(arrayOfNumbers)



// c. Crea un mètode que rebi dos números com a paràmetres i retorni un array amb tots els números compresos entre ells. Crida al mètode que acabes de crear amb els dos números que vulguis i imprimeix l’array que et retorna.

//                Sortida (amb el núm 2 i 10):

//                Els números compresos entre 2 i 10 són: 3, 4, 5, 6, 7, 8, 9

console.log('Exercise c:')

const arrayOfCompressedNumbers = []

function printCompressedNumbers (number1, number2) {
    const startNumberOfArray = number1 + 1

    console.log(`Exit (with number ${number1} and ${number2})`)

    for (i = startNumberOfArray; i < number2; i++) {

        arrayOfCompressedNumbers.push(i)

        if (i === number2 - 1) {
            return console.log(`The compressed numbers between ${number1} and ${number2} are: ${arrayOfCompressedNumbers}`)
        }
    } 
}

printCompressedNumbers(2, 12)