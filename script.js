let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")


canvas.width = window.innerWidth - 10
canvas.height = window.innerHeight - 10


ctx.fillStyle = "brown"
let kingkong = ctx.fillRect(10, 10, 100, 100)


ctx.fillStyle = "green"
let Godzilla = ctx.fillRect(50, 50, 100, 100)
