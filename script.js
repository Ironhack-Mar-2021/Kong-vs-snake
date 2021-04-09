let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let background_image = new Image();
background_image.src = './images/city-game-background-2d-application-260nw-398557408.png';
let kong_image = new Image();
kong_image.src = './images/KingKong.png';
let zilla_image = new Image();
zilla_image.src = './images/Zilla.png';
let deadKong = new Image();
deadKong.src = './images/KingDead.png'
let deadZilla = new Image();
deadZilla.src = './images/deadZilla.png'
let planeImg = new Image();
planeImg.src = './images/plane.png'



canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

ctx.fillStyle = 'brown';
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = 'green';
ctx.fillRect(50, 50, 600, 100);

const background = {
    x: 0,
    y: 0,
    w: canvas.width,
    h: canvas.height,
    draw: function () {
        ctx.drawImage(background_image, this.x, this.y, this.w, this.h);
    },
};

class Monster {
    gravity = 10;
    constructor(health, strength, speed, x, y, w, h, img, bh) {
        this.health = health;
        this.strength = strength;
        this.speed = speed;
        this.x = x;
        this.y = y;
        this.img = img;
        this.w = w;
        this.h = h;
        this.bh = bh;
    }
    draw = () => {
        if (this.y < this.bh) this.y += 3;
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y - 50, 200, 25)
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y - 50, Math.max(0, this.health / 100 * 200), 25)
        if (this.health <= 0) {
            this.dead()
        }
    };
    // dead = () => {
    // }
}
class Godzilla extends Monster {
    constructor(health, strength, speed, x, y, w, h, img, bh) {
        super(health, strength, speed, x, y, w, h, img, bh);
    }
    dead = () => {
        this.img = deadZilla
        cancelAnimationFrame(stopGame)
        restartGame()
    }
}
class KingKong extends Monster {
    constructor(health, strength, speed, x, y, w, h, img, bh) {
        super(health, strength, speed, x, y, w, h, img, bh);
    }
    dead = () => {
        this.img = deadKong
        cancelAnimationFrame(stopGame)
        restartGame()
    }
}
class Plane {
    constructor(x, y, w, h, img) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.img = img
    }
        detectCollision = (rect1) =>  {
            if (rect1.x < this.x + this.w &&
                rect1.x + rect1.w > this.x &&
                rect1.y < this.y + this.h &&
                rect1.y + rect1.h > this.y) {
                rect1.health = Math.min(100, rect1.health + .5)
            }
        }
        


    

    draw = () => {

        this.x -= 5
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        if (this.x < -800) {
            this.x = canvas.width + Math.random() * 1100



        }


    }


}
let plane = new Plane(
    canvas.width,
    150,
    80,
    80,
    planeImg


)

let godzilla = new Godzilla(
    100,
    5000,
    50,
    canvas.width - 400,
    canvas.height - 385,
    500,
    250,
    zilla_image,
    canvas.height - 285
);

let kingkong = new KingKong(
    100,
    5000,
    50,
    50,
    canvas.height - 450,
    300,
    300,
    kong_image,
    canvas.height - 350
);

//let godzilla = new Godzilla(100, 5000, 50, canvas.width - 400, canvas.height - 400, 300, 150, zilla_image)
window.onkeydown = function (e) {
    e.preventDefault()
    console.log(e.key);
    if (e.key == 'ArrowLeft') {
        godzilla.x -= 15;
    }
    if (e.key == 'ArrowRight') {
        godzilla.x += 15;
    }
    if (e.key == 'ArrowUp') {
        godzilla.y -= 200;
    }
    if (e.key == 'a') {
        kingkong.x -= 15;
    }
    if (e.key == 'w') {
        kingkong.y -= 200;
    }
    if (e.key == 'd') {
        kingkong.x += 15;
    }
    if (e.key == 'z' && detectCollision(godzilla, kingkong)) {
        godzilla.health--
        kingkong.w++
        kingkong.h++
        kingkong.bh--
        kingkong.y--
    }
    if (e.key == ' ' && detectCollision(godzilla, kingkong)) {
        kingkong.health--
        godzilla.w += 5
        godzilla.h += 5
        godzilla.y -= 5
        godzilla.bh -= 5
    }
};
let stopGame = null
function animate() {
    stopGame = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    godzilla.draw();
    kingkong.draw();
    plane.draw();
    detectCollision(godzilla, kingkong);
    plane.detectCollision(godzilla)
    plane.detectCollision(kingkong)

}
animate();

function detectCollision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y) {
        return true
    }
}
