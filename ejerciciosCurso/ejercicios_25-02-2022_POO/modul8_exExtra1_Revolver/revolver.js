
const playersList = []

const drumRandomNumber = Math.ceil(Math.random() * 6)
const randomNumberBulletPosition = Math.ceil(Math.random() * 6)

class Revolver {
    constructor (actualPosition, bulletPosition) {
        this.actualPosition = actualPosition
        this.bulletPosition = bulletPosition
    }

    shoot () {
        if (this.actualPosition === this.bulletPosition) {
            return true
        }
        else {
            return false
        }
    }

    nextBullet () {
        if (this.actualPosition === 6) {
            this.actualPosition = 1
        }
        else {
            this.actualPosition++
        }
    }

    info () {
        return `The position of the revolver is: ${this.actualPosition} & the bullet position is: ${this.bulletPosition}`
    }
}

const instanceOfRevolver = new Revolver(drumRandomNumber, randomNumberBulletPosition)



class Player {
    constructor ({
        id,
        name,
        nickname,
        alive
    }) {
        this.id = id
        this.name = name
        this.nickname = nickname
        this.alive = alive
    }

    play () {
        if (instanceOfRevolver.shoot()) {
            this.alive = false
            console.log(instanceOfRevolver.info())
        }
        else {
            this.alive = true
            console.log(instanceOfRevolver.info())
            instanceOfRevolver.nextBullet()
        }
    }
}


function getPlayers() {
    const players = Number(document.getElementById('players').value)

    if (players < 1 || players > 6) {
        players = 6
    }

    for (i = 1; i <= players; i++) {

        const player = new Player ({
            id: i,
            name: 'Player',
            nickname: `Player ${i}`,
            alive: true
        })

        playersList.push(player)
    }
}
    

class Game {
    constructor ({
        players,
        revolver
    }) {
        this.players = players,
        this.revolver = revolver
    }
    
    gameOver (player) {
        if (player.alive) {
            return false
        }
        else {
            return true
        }
    }
    
    round (player) {
        playersList[player - 1].play()

        if (this.gameOver(playersList[player - 1])) {
            alert('Game Over')
        }
    }
}

const goPlay = new Game({})