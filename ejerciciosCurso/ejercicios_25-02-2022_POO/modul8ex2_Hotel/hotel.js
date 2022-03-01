
const currentHotels = document.getElementById('currentHotels')

let hotelList = []


class Hotel {
    #name
    #numberOfRooms
    #numberOfPlants
    #totalAreaOfTheHotel

    constructor ({
        name,
        numberOfRooms,
        numberOfPlants,
        totalAreaOfTheHotel
    }) {
        this.#name = name
        this.#numberOfRooms = numberOfRooms
        this.#numberOfPlants = numberOfPlants
        this.#totalAreaOfTheHotel = totalAreaOfTheHotel
    }
    
    get name () {
        return this.#name
    }
    get numberOfRooms () {
        return this.#numberOfRooms
    }
    get numberOfPlants () {
        return this.#numberOfPlants
    }
    get totalAreaOfTheHotel () {
        return this.#totalAreaOfTheHotel
    }
    
    set name (modify) {
        this.#name = modify
    }
    set numberOfRooms (modify) {
        this.#numberOfRooms = modify
    }
    set numberOfPlants (modify) {
        this.#numberOfPlants = modify
    }
    set totalAreaOfTheHotel (modify) {
        this.#totalAreaOfTheHotel = modify
    }

    calculateMantenance () {
        const serviceStaff =  this.#numberOfRooms / 20
        const totalSalaryServiceStaff = serviceStaff * 1500
        return `The people needed to provide room service are: ${serviceStaff}
        The total cost for the service is: ${totalSalaryServiceStaff}€ per month`
    }

}




function createHotel() {
    const name = document.getElementById('nameOfHotel').value
    const numberOfRooms = Number(document.getElementById('numberOfRooms').value)
    const numberOfPlants = Number(document.getElementById('numberOfPlants').value)
    const totalAreaOfTheHotel = Number(document.getElementById('totalAreaOfTheHotel').value)

    const hotelCreated = new Hotel({
        name: name,
        numberOfRooms: numberOfRooms,
        numberOfPlants: numberOfPlants,
        totalAreaOfTheHotel: totalAreaOfTheHotel
    })

    hotelList.push(hotelCreated)

    let printHotels = 'Current Hotels: '

    for (i = 0; i < hotelList.length; i++) {
        printHotels += `${hotelList[i].name}, `
    }
    
    currentHotels.style = 'color: #54CC61'
    currentHotels.innerText = printHotels

    return hotelCreated
}




function cancelHotel () {

    const nameOfCancelHotel = document.getElementById('nameOfCancelHotel').value
    const alert = document.getElementById('alert')

    let validateHotel = false
    let namePosition = 0

    for(element of hotelList) {

        if (element.name === nameOfCancelHotel) {
            validateHotel = true
            console.log('Validate true')
            break
        }
        console.log(namePosition++)
    }


    if (validateHotel) {
        hotelList.splice(namePosition, 1)
        alert.style = 'color: green; display: inline'
        alert.innerText = `Hotel ${nameOfCancelHotel} has been removed`
    }
    else {
        alert.style = 'color: red; display: inline'
        alert.innerText = 'Hotel not found in hotel list'
    }

    printHotels = 'Current Hotels: '

    for (i = 0; i < hotelList.length; i++) {
        printHotels += `${hotelList[i].name}, `
    }
    
    currentHotels.innerText = printHotels
}


function seeHotel () {

    const nameHotelWantSee = document.getElementById('nameHotelWantSee').value
    const showHotel = document.getElementById('showHotel')

    let validateHotel = false
    let namePosition = 0

    for(element of hotelList) {

        if (element.name === nameHotelWantSee) {
            validateHotel = true
            console.log('Validate true in see')
            break
        }
        console.log(namePosition++)
    }


    if (validateHotel) {
        showHotel.innerText = `
        Name: ${hotelList[namePosition].name}
        Number of rooms: ${hotelList[namePosition].numberOfRooms}
        Number of plants: ${hotelList[namePosition].numberOfPlants}
        Total area of the hotels: ${hotelList[namePosition].totalAreaOfTheHotel}m²
        Additional information:
        ${hotelList[namePosition].calculateMantenance()}
        `
    }
    else {
        showHotel.innerText = 'Hotel not found in hotel list'
    }

}

let positionNameOnList = 0

function modifyHotel () {

    const modifyHotel = document.getElementById('modifyHotel')
    const modifyRooms = document.getElementById('modifyRooms')
    const modifyPlants = document.getElementById('modifyPlants')
    const modifyTotalArea = document.getElementById('modifyTotalArea')
    const modifyValues = document.getElementById('modifyValues')
    
    const hotelNameForModification = document.getElementById('hotelNameForModification').value
    const tittleModifyHotel = document.getElementById('tittleModifyHotel')
    const showHotelModification = document.getElementById('showHotelModification')

    let validateHotel = false
    let namePosition = 0

    for(element of hotelList) {

        if (element.name === hotelNameForModification) {

            validateHotel = true
            console.log('Validate true in modify')
            break
        }

        namePosition++
        positionNameOnList = namePosition
    }


    if (validateHotel) {

        tittleModifyHotel.style = 'color: black'
        modifyValues.style = 'display: inline; color: green'
        showHotelModification.style = 'color: black'

        modifyHotel.style = 'display: none'
        modifyRooms.style = 'display: inline-block'
        modifyPlants.style = 'display: inline-block'
        modifyTotalArea.style = 'display: inline-block'

        showHotelModification.innerText = ''
    }
    else {

        tittleModifyHotel.style = 'color: red'
        showHotelModification.style = 'color: red'
        showHotelModification.innerText = 'Hotel not found in hotel list'
    }
}

function modifyRooms () {

    const modifyHotel = document.getElementById('modifyHotel')
    const modifyRooms = document.getElementById('modifyRooms')
    const modifyPlants = document.getElementById('modifyPlants')
    const modifyTotalArea = document.getElementById('modifyTotalArea')
    const modifyValues = document.getElementById('modifyValues')

    const hotelNameForModification = Number(document.getElementById('hotelNameForModification').value)

    hotelList[positionNameOnList].numberOfRooms = hotelNameForModification

    tittleModifyHotel.style = 'color: green'
    modifyValues.style = 'display: none'
    showHotelModification.style = 'color: green'

    modifyHotel.style = 'display: inline-block; margin-left: 50px'
    modifyRooms.style = 'display: none'
    modifyPlants.style = 'display: none'
    modifyTotalArea.style = 'display: none'

    showHotelModification.innerText = 'Modification done successfully'
}

function modifyPlants () {

    const modifyHotel = document.getElementById('modifyHotel')
    const modifyRooms = document.getElementById('modifyRooms')
    const modifyPlants = document.getElementById('modifyPlants')
    const modifyTotalArea = document.getElementById('modifyTotalArea')
    const modifyValues = document.getElementById('modifyValues')

    const hotelNameForModification = Number(document.getElementById('hotelNameForModification').value)

    hotelList[positionNameOnList].numberOfPlants = hotelNameForModification

    showHotelModification.innerText = 'Modification done successfully'
}

function modifyTotalArea () {

    const hotelNameForModification = Number(document.getElementById('hotelNameForModification').value)

    hotelList[positionNameOnList].totalAreaOfTheHotel = hotelNameForModification

    showHotelModification.innerText = 'Modification done successfully'
}