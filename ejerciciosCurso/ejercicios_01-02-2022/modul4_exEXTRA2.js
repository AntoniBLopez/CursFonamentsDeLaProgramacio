const numbersWithLetters = [
    { 1 : "uno", 2 : "dos", 3 : "tres", 4 : "cuatro", 5 : "cinco", 6 : "seis", 7 : "siete", 8 : "ocho", 9 : "nueve" },
    { 10 : "diez", 11 : "Onze", 12 : "Doze", 13 : "Trece", 14 : "Catorce", 15 : "Quince" },
    { 20 : "Veinti", 30 : "Treinta", 40 : "Cuarenta", 50 : "Cincuenta", 60 : "Sesenta", 70 : "Setenta", 80 : "Ochenta", 90 : "Noventa" }
]

const almacenarNumerosDecimalesDelLoop = [
    ["Veinte"], ["Treinta"], ["Cuarenta"], ["Cincuenta"], ["Sesenta"], ["Setenta"], ["Ochenta"], ["Noventa"]
]


function cuentaVeinte(add) {
    return numbersWithLetters[2][20] + numbersWithLetters[0][add]
}

function cuentaTreinta(add) {
    return numbersWithLetters[2][30] + " y " + numbersWithLetters[0][add]
}

function cuentaCuarenta(add) {
    return numbersWithLetters[2][40] + " y " + numbersWithLetters[0][add]
}

function cuentaCincuenta(add) {
    return numbersWithLetters[2][50] + " y " + numbersWithLetters[0][add]
}

function cuentaSesenta(add) {
    return numbersWithLetters[2][60] + " y " + numbersWithLetters[0][add]
}

function cuentaSetenta(add) {
    return numbersWithLetters[2][70] + " y " + numbersWithLetters[0][add]
}

function cuentaOchenta(add) {
    return numbersWithLetters[2][80] + " y " + numbersWithLetters[0][add]
}

function cuentaNoventa(add) {
    return numbersWithLetters[2][90] + " y " + numbersWithLetters[0][add]
}


for (add = 1; add < 10; add++) {
    almacenarNumerosDecimalesDelLoop[0].push(cuentaVeinte(add))
    almacenarNumerosDecimalesDelLoop[1].push(cuentaTreinta(add))
    almacenarNumerosDecimalesDelLoop[2].push(cuentaCuarenta(add))
    almacenarNumerosDecimalesDelLoop[3].push(cuentaCincuenta(add))
    almacenarNumerosDecimalesDelLoop[4].push(cuentaSesenta(add))
    almacenarNumerosDecimalesDelLoop[5].push(cuentaSetenta(add))
    almacenarNumerosDecimalesDelLoop[6].push(cuentaOchenta(add))
    almacenarNumerosDecimalesDelLoop[7].push(cuentaNoventa(add))

    // const decimal = add + 1

    // if (decimal <= 9) {
    //     const concatenar = decimal + "0"
    //     console.log(concatenar)
    // }
}

// function cuentaDecimales(decimal) {
//     numbersWithLetters[2][decimal]
// }















// function obtenerNumeroCliente() {
//     const numeroEnteroUsuario = Number(document.getElementById("numeroEnteroUsuario").value)
//     const imprimirResultado = document.getElementById("imprimirResultado")

    
















    // if (numeroEnteroUsuario === 0) {imprimirResultado.innerText = "Cero"}
    // if (numeroEnteroUsuario === 1) {imprimirResultado.innerText = "Uno"}
    // if (numeroEnteroUsuario === 2) {imprimirResultado.innerText = "Dos"}
    // if (numeroEnteroUsuario === 3) {imprimirResultado.innerText = "Tres"}
    // if (numeroEnteroUsuario === 4) {imprimirResultado.innerText = "Cuatro"}
    // if (numeroEnteroUsuario === 5) {imprimirResultado.innerText = "Cinco"}
    // if (numeroEnteroUsuario === 6) {imprimirResultado.innerText = "Seis"}
    // if (numeroEnteroUsuario === 7) {imprimirResultado.innerText = "Siete"}
    // if (numeroEnteroUsuario === 8) {imprimirResultado.innerText = "Ocho"}
    // if (numeroEnteroUsuario === 9) {imprimirResultado.innerText = "Nueve"}
    // if (numeroEnteroUsuario === 10) {imprimirResultado.innerText = "Diez"}
    // if (numeroEnteroUsuario === 11) {imprimirResultado.innerText = "Once"}
    // if (numeroEnteroUsuario === 12) {imprimirResultado.innerText = "Doce"}
    // if (numeroEnteroUsuario === 13) {imprimirResultado.innerText = "Trece"}
    // if (numeroEnteroUsuario === 14) {imprimirResultado.innerText = "Catorce"}
    // if (numeroEnteroUsuario === 15) {imprimirResultado.innerText = "Quince"}
    // if (numeroEnteroUsuario === 16) {imprimirResultado.innerText = "Dieciseis"}
    // if (numeroEnteroUsuario === 17) {imprimirResultado.innerText = "Diecisiete"}
    // if (numeroEnteroUsuario === 18) {imprimirResultado.innerText = "Dieciocho"}
    // if (numeroEnteroUsuario === 19) {imprimirResultado.innerText = "Diecinueve"}
    // if (numeroEnteroUsuario === 20) {imprimirResultado.innerText = "Veinte"}
    // if (numeroEnteroUsuario === 21) {imprimirResultado.innerText = "Veintiuno"}
    // if (numeroEnteroUsuario === 22) {imprimirResultado.innerText = "Veintidos"}
    // if (numeroEnteroUsuario === 23) {imprimirResultado.innerText = "Veintitres"}
    // if (numeroEnteroUsuario === 24) {imprimirResultado.innerText = "Veinticuatro"}
    // if (numeroEnteroUsuario === 25) {imprimirResultado.innerText = "Veinticinco"}
    // if (numeroEnteroUsuario === 26) {imprimirResultado.innerText = "Veintiseis"}
    // if (numeroEnteroUsuario === 27) {imprimirResultado.innerText = "Veintisiete"}
    // if (numeroEnteroUsuario === 28) {imprimirResultado.innerText = "Veintiocho"}
    // if (numeroEnteroUsuario === 29) {imprimirResultado.innerText = "Veintinueve"}
    // if (numeroEnteroUsuario === 30) {imprimirResultado.innerText = "Treinta"}
    // if (numeroEnteroUsuario === 31) {imprimirResultado.innerText = "Treinta y uno"}
    // if (numeroEnteroUsuario === 32) {imprimirResultado.innerText = "Treinta y dos"}
    // if (numeroEnteroUsuario === 33) {imprimirResultado.innerText = "Treinta y tres"}
    // if (numeroEnteroUsuario === 34) {imprimirResultado.innerText = "Treinta y cuatro"}
    // if (numeroEnteroUsuario === 35) {imprimirResultado.innerText = "Treinta y cinco"}
    // if (numeroEnteroUsuario === 36) {imprimirResultado.innerText = "Treinta y seis"}
    // if (numeroEnteroUsuario === 37) {imprimirResultado.innerText = "Treinta y siete"}
    // if (numeroEnteroUsuario === 38) {imprimirResultado.innerText = "Treinta y ocho"}
    // if (numeroEnteroUsuario === 39) {imprimirResultado.innerText = "Treinta y nueve"}
    // if (numeroEnteroUsuario === 40) {imprimirResultado.innerText = "Cuarenta"}
    // if (numeroEnteroUsuario === 41) {imprimirResultado.innerText = "Cuarenta y uno"}
    // if (numeroEnteroUsuario === 42) {imprimirResultado.innerText = "Cuarenta y dos"}
    // if (numeroEnteroUsuario === 43) {imprimirResultado.innerText = "Cuarenta y tres"}
    // if (numeroEnteroUsuario === 44) {imprimirResultado.innerText = "Cuarenta y cuatro"}
    // if (numeroEnteroUsuario === 45) {imprimirResultado.innerText = "Cuarenta y cinco"}
    // if (numeroEnteroUsuario === 46) {imprimirResultado.innerText = "Cuarenta y seis"}
    // if (numeroEnteroUsuario === 47) {imprimirResultado.innerText = "Cuarenta y siete"}
    // if (numeroEnteroUsuario === 48) {imprimirResultado.innerText = "Cuarenta y ocho"}
    // if (numeroEnteroUsuario === 49) {imprimirResultado.innerText = "Cuarenta y nueve"}
    // if (numeroEnteroUsuario === 50) {imprimirResultado.innerText = "Cincuenta"}
    // if (numeroEnteroUsuario === 51) {imprimirResultado.innerText = "Cincuenta y uno"}
    // if (numeroEnteroUsuario === 52) {imprimirResultado.innerText = "Cincuenta y dos"}
    // if (numeroEnteroUsuario === 53) {imprimirResultado.innerText = "Cincuenta y tres"}
    // if (numeroEnteroUsuario === 54) {imprimirResultado.innerText = "Cincuenta y cuatro"}
    // if (numeroEnteroUsuario === 55) {imprimirResultado.innerText = "Cincuenta y cinco"}
    // if (numeroEnteroUsuario === 56) {imprimirResultado.innerText = "Cincuenta y seis"}
    // if (numeroEnteroUsuario === 57) {imprimirResultado.innerText = "Cincuenta y siete"}
    // if (numeroEnteroUsuario === 58) {imprimirResultado.innerText = "Cincuenta y ocho"}
    // if (numeroEnteroUsuario === 59) {imprimirResultado.innerText = "Cincuenta y nueve"}
    // if (numeroEnteroUsuario === 60) {imprimirResultado.innerText = "Sesenta"}
    // if (numeroEnteroUsuario === 61) {imprimirResultado.innerText = "Sesenta y uno"}
    // if (numeroEnteroUsuario === 62) {imprimirResultado.innerText = "Sesenta y dos"}
    // if (numeroEnteroUsuario === 63) {imprimirResultado.innerText = "Sesenta y tres"}
    // if (numeroEnteroUsuario === 64) {imprimirResultado.innerText = "Sesenta y cuatro"}
    // if (numeroEnteroUsuario === 65) {imprimirResultado.innerText = "Sesenta y cinco"}
    // if (numeroEnteroUsuario === 66) {imprimirResultado.innerText = "Sesenta y seis"}
    // if (numeroEnteroUsuario === 67) {imprimirResultado.innerText = "Sesenta y siete"}
    // if (numeroEnteroUsuario === 68) {imprimirResultado.innerText = "Sesenta y ocho"}
    // if (numeroEnteroUsuario === 69) {imprimirResultado.innerText = "Sesenta y nueve"}
    // if (numeroEnteroUsuario === 70) {imprimirResultado.innerText = "Setenta"}
    // if (numeroEnteroUsuario === 71) {imprimirResultado.innerText = "Setenta y uno"}
    // if (numeroEnteroUsuario === 72) {imprimirResultado.innerText = "Setenta y dos"}
    // if (numeroEnteroUsuario === 73) {imprimirResultado.innerText = "Setenta y tres"}
    // if (numeroEnteroUsuario === 74) {imprimirResultado.innerText = "Setenta y cuatro"}
    // if (numeroEnteroUsuario === 75) {imprimirResultado.innerText = "Setenta y cinco"}
    // if (numeroEnteroUsuario === 76) {imprimirResultado.innerText = "Setenta y seis"}
    // if (numeroEnteroUsuario === 77) {imprimirResultado.innerText = "Setenta y siete"}
    // if (numeroEnteroUsuario === 78) {imprimirResultado.innerText = "Setenta y ocho"}
    // if (numeroEnteroUsuario === 79) {imprimirResultado.innerText = "Setenta y nueve"}
    // if (numeroEnteroUsuario === 80) {imprimirResultado.innerText = "Ochenta"}
    // if (numeroEnteroUsuario === 81) {imprimirResultado.innerText = "Ochenta y uno"}
    // if (numeroEnteroUsuario === 82) {imprimirResultado.innerText = "Ochenta y dos"}
    // if (numeroEnteroUsuario === 83) {imprimirResultado.innerText = "Ochenta y tres"}
    // if (numeroEnteroUsuario === 84) {imprimirResultado.innerText = "Ochenta y cuatro"}
    // if (numeroEnteroUsuario === 85) {imprimirResultado.innerText = "Ochenta y cinco"}
    // if (numeroEnteroUsuario === 86) {imprimirResultado.innerText = "Ochenta y seis"}
    // if (numeroEnteroUsuario === 87) {imprimirResultado.innerText = "Ochenta y siete"}
    // if (numeroEnteroUsuario === 88) {imprimirResultado.innerText = "Ochenta y ocho"}
    // if (numeroEnteroUsuario === 89) {imprimirResultado.innerText = "Ochenta y nueve"}
    // if (numeroEnteroUsuario === 90) {imprimirResultado.innerText = "Noventa"}
    // if (numeroEnteroUsuario === 91) {imprimirResultado.innerText = "Noventa y uno"}
    // if (numeroEnteroUsuario === 92) {imprimirResultado.innerText = "Noventa y dos"}
    // if (numeroEnteroUsuario === 93) {imprimirResultado.innerText = "Noventa y tres"}
    // if (numeroEnteroUsuario === 94) {imprimirResultado.innerText = "Noventa y cuatro"}
    // if (numeroEnteroUsuario === 95) {imprimirResultado.innerText = "Noventa y cinco"}
    // if (numeroEnteroUsuario === 96) {imprimirResultado.innerText = "Noventa y seis"}
    // if (numeroEnteroUsuario === 97) {imprimirResultado.innerText = "Noventa y siete"}
    // if (numeroEnteroUsuario === 98) {imprimirResultado.innerText = "Noventa y ocho"}
    // if (numeroEnteroUsuario === 99) {imprimirResultado.innerText = "Noventa y nueve"}
    
    // if (numeroEnteroUsuario < 0 || numeroEnteroUsuario > 99) {imprimirResultado.innerText = "El numero tiene que ser entre el 0 y el 99"}


    // Otra forma que se me ha ocurrido es hacerlo con un array y invocar su posición con el número que nos de el usuario y
    // que nos devuelva el valor de la posición. Y que el valor sea el número escrito con letras. De esta manera:


        // const numeros = ["Cero", "Uno", "Dos", "Tres","Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez",
        // "Once", "Doce", "Trece", "Catorce", "Quince" etc...]
    
        // imprimirResultado.innerText = numeros[numeroEnteroUsuario]
// }