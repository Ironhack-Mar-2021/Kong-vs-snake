document.querySelector('#vsimg button').onclick = function () {
    document.querySelector('#canvas').classList.toggle('hidden');
    //     audio.play();
}
const start = document.querySelector('#start');

// start.addEventListener('click', classList.add(''))

function restartGame() {
    console.log('restartGame')
    document.querySelector('#restart').style.display = 'block'
    document.querySelector('#canvas').classList.add('hidden')
    document.querySelector('#start').style.display = 'none'
}

document.querySelector('#restart').onclick = function () { location.reload() }