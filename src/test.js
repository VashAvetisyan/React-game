class Warior {
    constructor(minPower, maxPower, health){
        this.minPower = minPower;
        this.maxPower = maxPower;
        this.health = health;
    }

    attack = () => {
        return Math.floor(Math.random() * (this.maxPower - this.minPower) + this.minPower)
    }
}

const հero1 = new Warior(200, 300, 1000)

const հero2 = new Warior(150, 250, 1300)

let turn = "hero1"
let round = 1


const play = () => {
    while( հero1.health > 0 && հero2.health > 0){
        if(turn === "hero1"){
            հero2.health = հero2.health - հero1.attack()


            console.log('\x1b[31m', `Round ${round}`, '\x1b[0m')
            console.log("\x1b[33m", "It's hero1 turn")
            console.log('\x1b[34m', `hero1 attack ${հero1.attack()}`, '\x1b[0m') 
            console.log('\x1b[32m', `hero2 health ${հero2.health}`, '\x1b[0m', '\n') 

            round++
            turn = "hero2"

        }else if(turn === "hero2"){
            հero1.health = հero1.health - հero2.attack()

            console.log('\x1b[31m', `Round ${round}`, '\x1b[0m')
            console.log("\x1b[33m", "It's hero2 turn")
            console.log('\x1b[34m', `hero2 attack ${հero2.attack()}`, '\x1b[0m') 
            console.log('\x1b[32m', `hero1 health ${հero1.health}`, '\x1b[0m', '\n') 

            round++
            turn = "hero1"

        }
    }
    if(հero1.health <= 0){
        console.log("\x1b[31m", "_________________________________________")
        console.log("\x1b[31m", "Game Over ")
        console.log("\x1b[31m", "Hero2 won!")
    }else if(հero2.health <= 0){
        console.log("\x1b[31m", "_________________________________________")
        console.log("\x1b[31m", "Game Over")
        console.log("\x1b[31m", "Hero1 won!")
    }
}

play()
