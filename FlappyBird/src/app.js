const score = document.querySelector('.score');
const startBtn = document.querySelector('.btn-start');
const gameArea = document.querySelector('.area-game');
const gameMsg = document.querySelector('.msg-game');

let keys = {};
let bird = document.createElement('div');
let wing = document.createElement('div');
let player = {
    x: 0,
    y: 0,
    speed: 5
};

function gameStart() {
    gameMsg.classList.add('hidden');
    startBtn.classList.add('hidden');
    bird.setAttribute('class', 'bird');
    wing.setAttribute('class', 'wing');
    bird.appendChild(wing);
    wing.pos = 10;
    wing.style.top = wing.pos +  "px";
    gameArea.appendChild(bird);
    player.x = bird.offsetLeft;
    player.y = bird.offsetTop;
    window.requestAnimationFrame(playGame);
}

function playGame(){
    let move = false;
    if(keys.ArrowLeft && player.x > -20){
        player.x -= player.speed;
        move = true;
    }
    if(keys.ArrowRight && player.x < gameArea.offsetWidth - bird.offsetWidth + 20){
        player.x += player.speed;
        move = true;
    }
    if(keys.ArrowUp && player.y > -20){
        player.y -= player.speed;
        move = true;
    }
    if(keys.ArrowDown && player.y < gameArea.offsetHeight - bird.offsetHeight + 20){
        player.y += player.speed;
        move = true;
    }
    if(move) {
        wing.pos = wing.pos === 10? 15 : 10;
        wing.style.top = wing.pos +  "px";
    }

    bird.style.left = player.x + "px";
    bird.style.top = player.y + "px";
    window.requestAnimationFrame(playGame);
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