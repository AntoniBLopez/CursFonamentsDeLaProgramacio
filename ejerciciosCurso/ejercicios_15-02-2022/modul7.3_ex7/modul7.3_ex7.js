const printResultOfIngredients = document.getElementById('printResultOfIngredients')
const printResultOfPrices = document.getElementById('printResultOfPrices')

const amountNoodlesForOnePerson = 500 / 4
const amountPrawnsForOnePerson = 400 / 4
const amountSquidForOnePerson = 200 / 4

const kilo = 1000

function calculateIngredientsAndPrice() {
    const priceKiloOfNoodles = Number(document.getElementById('priceKiloOfNoodles').value)
    const priceKiloOfPrawns = Number(document.getElementById('priceKiloOfPrawns').value)
    const priceKiloOfSquid = Number(document.getElementById('priceKiloOfSquid').value)
    const amountOfPeopleWhoWillEat = Number(document.getElementById('amountOfPeopleWhoWillEat').value)


    const totalAmountOfNoodles = amountNoodlesForOnePerson * amountOfPeopleWhoWillEat
    const totalAmountOfPrawns = amountPrawnsForOnePerson * amountOfPeopleWhoWillEat
    const totalAmountOfSquid = amountSquidForOnePerson * amountOfPeopleWhoWillEat
    
    printResultOfIngredients.innerText = `The total amount of noodles is: ${totalAmountOfNoodles} grams \nThe total amount of prawns is: ${totalAmountOfPrawns} grams \nThe total amount of squid is: ${totalAmountOfSquid} grams`


    const totalPriceOfNoodles = priceKiloOfNoodles / kilo * totalAmountOfNoodles
    const totalPriceOfPrawns = priceKiloOfPrawns / kilo * totalAmountOfPrawns
    const totalPriceOfSquid = priceKiloOfSquid / kilo * totalAmountOfSquid

    const totalPriceOfFideua = totalPriceOfNoodles + totalPriceOfPrawns + totalPriceOfSquid
    const totalPricePerPerson = totalPriceOfFideua / amountOfPeopleWhoWillEat

    printResultOfPrices.innerText = `The total price of the fideuá is: ${totalPriceOfFideua.toFixed(2)}€ \nThe price per person is: ${totalPricePerPerson.toFixed(2)}€`
}
