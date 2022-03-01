import { Ordenador } from './ordinador.mjs'

// Así creamos una sub clase de la super clase ( Herencia )

// class CrearOrdenadores extends Ordenador {
//     constructor (props) {
//         super(props)
//     }
// }

// En este proyecto no es necesario porque los 2 ordenadores necesitan
// los mismos atributos y métodos del súper prototipo con la sintáxis
// de una clase

let marca
let modelo
let memoriaRam
let procesador
let discoDuro

function crearOrdenadores (num) {
    marca = prompt(`Ordenador ${num}:\n¿Que marca es?`),
    modelo = prompt(`Ordenador ${num}:\n¿Que modelo es?`),
    memoriaRam = prompt(`Ordenador ${num}:\n¿De cuanto es su memoria RAM?`),
    procesador = prompt(`Ordenador ${num}:\n¿Que procesador tiene?`),
    discoDuro = prompt(`Ordenador ${num}:\n¿De cuanto es la capacidad del disco duro?`)
}

crearOrdenadores(1)

const ordenadorUno = new Ordenador({
    marca: marca,
    modelo: modelo,
    memoriaRam: memoriaRam,
    procesador: procesador,
    capacidadDiscoDuro: discoDuro
})

console.log(ordenadorUno.ejecutando('Brave'), ordenadorUno.descripcionCompleta())

crearOrdenadores(2)

const ordenadorDos = new Ordenador({
    marca: marca,
    modelo: modelo,
    memoriaRam: memoriaRam,
    procesador: procesador,
    capacidadDiscoDuro: discoDuro
})

console.log(ordenadorDos.ejecutando('Safari'), ordenadorDos.descripcionCompleta())