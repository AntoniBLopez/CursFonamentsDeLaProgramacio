
export class Ordenador {
    #marca
    #modelo
    #procesador
    #memoriaRam
    #capacidadDiscoDuro

    constructor ({
        marca,
        modelo,
        procesador,
        memoriaRam,
        capacidadDiscoDuro
    }) {
        this.#marca = marca,
        this.#modelo = modelo,
        this.#procesador = procesador,
        this.#memoriaRam = memoriaRam,
        this.#capacidadDiscoDuro = capacidadDiscoDuro
    }

    get getMarca() {
        return this.#marca
    }
    get getModelo() {
        return this.#modelo
    }
    get getProcesador() {
        return this.#procesador
    }
    get getMemoriaRam() {
        return this.#memoriaRam
    }
    get getCapacidadDiscoDuro() {
        return this.#capacidadDiscoDuro
    }

    set setProcesador(nuevoNombre) {
        this.#procesador = nuevoNombre
    }
    set setMemoriaRam(nuevoNombre) {
        this.#memoriaRam = nuevoNombre
    }
    set setCapacidadDiscoDuro(nuevoNombre) {
        this.#capacidadDiscoDuro = nuevoNombre
    }

    ejecutando (nombre) {
        return 'En estos momentos se está ejecutando: ' + nombre
    }
    descripcionCompleta() {
        return `
        Descripción del ordenador:
        La marca es: ${this.#marca}
        El modelo es: ${this.#modelo}
        El procesador es: ${this.#procesador}
        La memoria RAM es: ${this.#memoriaRam}
        La capacidad del disco duro es de: ${this.#capacidadDiscoDuro}
        `
    }
}