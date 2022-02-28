import { Ordenador } from './ordinador.mjs'

// function crearOrdenadores () {
//     super.Ordenador
// }


const crearOrdenadores = new Ordenador({
    marca: prompt('Marca?'),
    modelo: prompt('Modelo?'),
    procesador: prompt('Procesador?'),
    memoriaRam: prompt('Memoria RAM?'),
    capacidadDiscoDuro: prompt('Capacidad del disco duro?')
})

console.log(crearOrdenadores.descripcionCompleta())