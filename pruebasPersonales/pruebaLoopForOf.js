let alumnes = ['Pep', 'Paco', 'Aina', 'Lluisa', 'Joan']
let contenido = 'El contenido del Array es: \nAlumnos:\n'
let i = 0

for (let valor of alumnes) {
    contenido += i + " " + valor + '\n'
    i++
}
console.log(contenido)
