const treballadors = [
    {
       nom : "Ana",
       cognom: "Puig",
       carrec: "venedor(a)",
       disponibilitatTrasllat : true
    },
    {
       nom : "Lluis",
       cognom: "Soto",
       carrec: "venedor(a)",
       disponibilitatTrasllat : false
    },
    {
       nom : "Cristina",
       cognom: "Tomas",
       carrec: "administratiu(a)",
       disponibilitatTrasllat : false
    },
    {
       nom : "Andreu",
       cognom: "Ricart",
       carrec: "venedor(a)",
       disponibilitatTrasllat : true
    },
    {
       nom : "Pep",
       cognom: "Vila",
       carrec: "venedor(a)",
       disponibilitatTrasllat : false
    },
    {
       nom : "Núria",
       cognom: "Roure",
       carrec: "administratiu(a)",
       disponibilitatTrasllat : true
    },
 
]

// Resultado pregunta 2b:

const persona = {}

for (element of treballadors) {

    if (element.nom === 'Pep') {

        Object.defineProperty(persona, 'newPerson', {
            value: element
        })
    }
}

function resultPregunta2b () {
    document.getElementById('nom1').innerText = persona.newPerson.nom
    document.getElementById('cognoms1').innerText = persona.newPerson.cognom
    document.getElementById('carrec1').innerText = persona.newPerson.carrec
    document.getElementById('trasllat1').innerText = persona.newPerson.disponibilitatTrasllat
}


// Resultado pregunta 2c:

function resultPregunta2c () {

    const personsList = []
    
    for (element of treballadors) {
    
        if(element.disponibilitatTrasllat === true) {
            personsList.push(element)
        }
    }
    
    console.log(personsList)
}
