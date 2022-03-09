// Resultat pregunta 1:

const array1 = []
const array2 = []

for (i = 100; i >= 5; i--) {
    if (i % 5 === 0) {
        array1.push(i)
        if (i % 3 === 0) {
            array2.push(i)
        }
    }
}

array2.sort((a, b) => {return a-b});

function resultPregunta1() {
    document.getElementById('array1').innerText = array1
    document.getElementById('array2').innerText = array2
}