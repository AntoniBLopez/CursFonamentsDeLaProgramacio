// Resultado pregunta 2e:

class trabajador {
    constructor ({
        nom,
        cognom,
        carrec,
        disponibilitatTrasllat
    }) {
        this.treballadors = {
           nom,
           cognom,
           carrec,
           disponibilitatTrasllat,
        }
    }
}

const newWorker = new trabajador({
    nom: 'Toni',
    cognom: 'B. Lopez',
    carrec: 'Developer',
    disponibilitatTrasllat: true
})

function resultPregunta2e() {
    document.getElementById('nom2').innerText = newWorker.treballadors.nom
    document.getElementById('cognoms2').innerText = newWorker.treballadors.cognom
    document.getElementById('carrec2').innerText = newWorker.treballadors.carrec
    document.getElementById('trasllat2').innerText = newWorker.treballadors.disponibilitatTrasllat
}