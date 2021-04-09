let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let background_image = new Image();
background_image.src = './images/city-game-background-2d-application-260nw-398557408.png';
let kong_image = new Image();
kong_image.src = './images/f48f9b325ccea5585e0a910f5c2a8977-removebg-preview.png';
let zilla_image = new Image();
zilla_image.src = './images/e58753d4724d6e779d7fa07e2f61bb5f-removebg-preview.png';

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
		if (this.y < this.bh) this.y++;
		ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
	};
}
class Godzilla extends Monster {
	constructor(health, strength, speed, x, y, w, h, img, bh) {
		super(health, strength, speed, x, y, w, h, img, bh);
	}
}
class KingKong extends Monster {
	constructor(health, strength, speed, x, y, w, h, img, bh) {
		super(health, strength, speed, x, y, w, h, img, bh);
	}
}

let godzilla = new Godzilla(
	100,
	5000,
	50,
	canvas.width - 400,
	canvas.height - 385,
	300,
	150,
	zilla_image,
	canvas.height - 385
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
	canvas.height - 450
);

window.onkeydown = function (e) {
	console.log(e.key);
	if (e.key == 'ArrowLeft') {
		godzilla.x -= 5;
	}
	if (e.key == 'ArrowRight') {
		godzilla.x += 5;
	}
	if (e.key == 'ArrowUp') {
		godzilla.y -= 100;
	}
	if (e.key == 'a') {
		kingkong.x -= 5;
	}
	if (e.key == 'w') {
		kingkong.y -= 100;
	}
	if (e.key == 'd') {
		kingkong.x += 5;
	}
};

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	background.draw();
	godzilla.draw();
	kingkong.draw();
}
animate();
