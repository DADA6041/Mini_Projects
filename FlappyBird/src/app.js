const score = document.querySelector('.score');
const startBtn = document.querySelector('.btn-start');
const gameArea = document.querySelector('.area-game');
const gameMsg = document.querySelector('.msg-game');

function gameStart() {
    gameMsg.classList.add('hidden');
    startBtn.classList.add('hidden');
}

function pressOn(){
    console.log('on!')
}

function pressOff(){
    console.log('off!')
}


startBtn.addEventListener('click', gameStart);
gameMsg.addEventListener('click', gameStart);
document.addEventListener('keydown', pressOn);
document.addEventListener('keyup', pressOff);