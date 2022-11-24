const score = document.querySelector('.score');
const startBtn = document.querySelector('.btn-start');
const gameArea = document.querySelector('.area-game');
const gameMsg = document.querySelector('.msg-game');

let keys = {};
let bird = document.createElement('div');
let wing = document.createElement('div');

function gameStart() {
    gameMsg.classList.add('hidden');
    startBtn.classList.add('hidden');
    bird.setAttribute('class', 'bird');
    wing.setAttribute('class', 'wing');
    bird.appendChild(wing);
    gameArea.appendChild(bird);
}

function pressOn(e){
    keys[e.code] = true;
    console.log(keys);
}

function pressOff(e){
    keys[e.code] = false;
    console.log(keys);
}


startBtn.addEventListener('click', gameStart);
gameMsg.addEventListener('click', gameStart);
document.addEventListener('keydown', pressOn);
document.addEventListener('keyup', pressOff);