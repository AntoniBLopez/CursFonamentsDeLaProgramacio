alert("¡Hola, me alegro de que estés por aquí! Vamos a jugar a un juego. Cuando le des a aceptar te saldrán 3 ventanas como esta, en las que tendrás que añadir el número que quieras a cada una de ellas, después, calcularemos la mediana de las 3 notas, ¿empezamos?")

let valorNota1 = prompt("Introduce la nota 1/3")
let valorNota2 = prompt("Introduce la nota 2/3")
let valorNota3 = prompt("Introduce la nota 3/3")

let listaDeNotas = [valorNota1, valorNota2, valorNota3]

function calcularMediana () {
    let calcularMedianaListaNotas = listaDeNotas.length / 2
    let medianaListaNotas = Math.floor(calcularMedianaListaNotas)

    return medianaListaNotas
}

document.getElementById("resultadoMediana").innerText = listaDeNotas[calcularMediana()];