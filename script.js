let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")


canvas.width = window.innerWidth - 10
canvas.height = window.innerHeight - 10


ctx.fillStyle = "brown"
ctx.fillRect(10, 10, 100, 100)


ctx.fillStyle = "green"
ctx.fillRect(50, 50, 600, 100)

class Monster {
    constructor(health, strength, speed, x, y) {
        this.health = health;
        this.strength = strength;
        this.speed = speed;
        this.x = x;
        this.y = y
    }
}
class Godzilla extends Monster {
    constructor(health, strength, speed, x, y) {
        super(health, strength, speed, x, y)
    }
}
class KingKong extends Monster {
    constructor(health, strength, speed, x, y) {
        super(health, strength, speed, x, y)
    }
}

let godzilla = new Godzilla(100, 5000, 50, 50, 50)

let kingkong = new KingKong(100, 5000, 50, canvas.width - 10, canvas.height - 10)