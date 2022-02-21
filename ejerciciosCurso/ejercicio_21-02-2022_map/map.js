// This program aims to be a function preparate to recive an array and another function as parameters.

// The program should be able to apply for each element of array the function passed as second parameter and return a new array with this result.

function successfulExercice (receiveArray, receiveFunction) {

    newArray = receiveArray.map(function(elementsArray) {
        return receiveFunction(elementsArray)
    })
}


successfulExercice([1, 2, 5], sumar)

function sumar (suma) {
    return suma + suma
}

console.log(`Exercice 0: The new array with the result is: newArray[${newArray}]`)



// Case 1: First paramater should be an array

// As user, when I pass not an array as first parameter to program, we see an error in console that says 'first parameter is not an array'.

console.log(`Case 1:`)

function successfulExercice1 (receiveArray, receiveFunction) {
    if (!Array.isArray(receiveArray)) {
        console.error("The first parameter is not an array")
    }
}

successfulExercice1("hello", sumar)



// Case 2: Second paramater should be a function

// As user, when I pass not a function as second parameter to program, we see an error in console that says 'second parameter is not a function'.

console.log(`Case 2:`)

function successfulExercice2 (receiveArray, receiveFunction) {
    if (typeof(receiveFunction) != 'function') {
        console.error("The second parameter is not a function")
    }
}

successfulExercice2("hello", "proof")



// Case 3: Sum by one

// As user, when I pass an array with numbers and call to program, we recibe and a new array with all numbers sumed by one.

console.log(`Case 3:`)

function successfulExercice3 (receiveArray, receiveFunction) {

    newArray3 = receiveArray.map(function(elementsArray) {
        return elementsArray + 1
    })
}

successfulExercice3([1, 2, 5], "hello")

console.log(`The new array with the result is: newArray[${newArray3}]`)



// Case 4: Sum by two

// As user, when I pass an array with numbers and call to program, we recibe and a new array with all numbers sumed by two.

console.log(`Case 4:`)

function successfulExercice4 (receiveArray, receiveFunction) {

    newArray4 = receiveArray.map(function(elementsArray) {
        return elementsArray + 2
    })
}

successfulExercice4([1, 2, 5], "hello")

console.log(`The new array with the result is: newArray[${newArray4}]`)


// Case 5: Sum by three

// As user, when I pass an array with numbers and call to program, we recibe and a new array with all numbers sumed by three.

console.log(`Case 5:`)

function successfulExercice5 (receiveArray, receiveFunction) {

    newArray5 = receiveArray.map(function(elementsArray) {
        return elementsArray + 3
    })
}

successfulExercice5([1, 2, 5], "hello")

console.log(`The new array with the result is: newArray[${newArray5}]`)



// Case 6: Multiply by two

// As user, when I pass an array with numbers and call to program, we recibe and a new array with all numbers multiplied by two.

console.log(`Case 6:`)

function successfulExercice6 (receiveArray, receiveFunction) {

    newArray6 = receiveArray.map(function(elementsArray) {
        return elementsArray * 2
    })
}

successfulExercice6([1, 2, 5], "hello")

console.log(`The new array with the result is: newArray[${newArray6}]`)



// Case 7: Rest by two

// As user, when I pass an array with numbers and call to program, we recibe and a new array with all numbers rested by two.

console.log(`Case 7:`)

function successfulExercice7 (receiveArray, receiveFunction) {

    newArray7 = receiveArray.map(function(elementsArray) {
        return elementsArray - 2
    })
}

successfulExercice7([1, 2, 5], "hello")

console.log(`The new array with the result is: newArray[${newArray7}]`)



// Case 8: Divide by two

// As user, when I pass an array with numbers and call to program, we recibe and a new array with all numbers divided by two.

console.log(`Case 8:`)

function successfulExercice8 (receiveArray, receiveFunction) {

    newArray8 = receiveArray.map(function(elementsArray) {
        return elementsArray / 2
    })
}

successfulExercice8([1, 2, 5], "hello")

console.log(`The new array with the result is: newArray[${newArray8}]`)



// Case 9: Convert to upper case

// As user, when I pass an array with strings in lower case and call to program, we recibe and a new array with all words to upper case.

console.log(`Case 9:`)

function successfulExercice9 (receiveArray, receiveFunction) {

    newArray9 = receiveArray.map(function(elementsArray) {
        return  elementsArray.toUpperCase()
    })
}

successfulExercice9(['how', 'are', 'you'], "hello")

console.log(`The new array with the result is: newArray[${newArray9}]`)