//                                      My-filter

// This program aims to be a function prepared to receive an array and another function as parameters.

// The function should valuate a condition that returns true or false.

// The program should be able to apply to each element of the array the function passed as the second parameter and return a new array with elements that accomplish the condition of function.


// Simulación manual de lo que haría .filter() :

const listNumbers = [1,2,3,4,5]

const newArray = []

let result;

function successfulExercice (receiveArray, receiveFunction) {

    for (i = 0; i < receiveArray.length; i++) {

        receiveFunction(receiveArray[i])
    }
}

function condition (num) {

    if (num >= 2) {
        return newArray.push(num)
    }
}

successfulExercice(listNumbers, condition)

console.log(`Exercice 0: The new array with the result is: newArray[${newArray}]`)



// Case 7: Number is even

// As a user, when I pass an array with numbers [1,2,3,4,5] and call to the program, we get a new array with all even numbers.

function successfulExercice7 (receiveArray, receiveFunction) {

    newArray7 = receiveArray.filter(function(elementsArray) {
        return receiveFunction(elementsArray)
    })
}


successfulExercice7([1, 2, 3, 4, 5], condition7)

function condition7 (num) {
    if (num % 2 === 0) {
        return num
    }
}

console.log(`Exercice 7: The new array with the result is: newArray[${newArray7}]`)



// Case 8: Number is odd

// As a user, when I pass an array with numbers [1,2,3,4,5] and call to the program, we get a new array with all odd numbers.

function successfulExercice8 (receiveArray, receiveFunction) {

    newArray8 = receiveArray.filter(function(elementsArray) {
        return receiveFunction(elementsArray)
    })
}


successfulExercice8([1, 2, 3, 4, 5], condition8)

function condition8 (num) {
    if (num % 2 === 1) {
        return num
    }
}

console.log(`Exercice 8: The new array with the result is: newArray[${newArray8}]`)



// Case 9: User name is Pepito

// As a user, when I pass an array with names [{name: 'Pepita', surname: 'Grillo', age: 25}, { name: 'Maria', surname: 'Martinez', age: 35}, {name: 'Pepito', surname: 'Grillo', age: 27}, {name: 'Pepito', surname: 'Sanchez', age: 45} ] and call to the program, we get a new array with all users with Pepito's name.

function successfulExercice9 (receiveArray, receiveFunction) {

    newArray9 = receiveArray.filter(function(elementsArray) {
        if (receiveFunction(elementsArray)) {
            return elementsArray
        }
    })
    return newArray9
}

const array1 = [ {name: 'Pepita', surname: 'Grillo', age: 25},
{ name: 'Maria', surname: 'Martinez', age: 35},
{name: 'Pepito', surname: 'Grillo', age: 27},
{name: 'Pepito', surname: 'Sanchez', age: 45} ]

function condition9 (array9) {
    if (array9.name === 'Pepito') {
        return array9
    }
}

console.log(`Exercice 9: The new array with the result is: newArray ${result}`)
