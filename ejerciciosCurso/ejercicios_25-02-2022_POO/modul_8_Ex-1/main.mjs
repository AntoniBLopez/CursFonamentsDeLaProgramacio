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

crearOrdenadores(1)

const ordenadorUno = new Ordenador({
    modelo: modelo,
    memoriaRam: memoriaRam,
    marca: marca,
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