const score = document.querySelector('.score');
const startBtn = document.querySelector('.btn-start');
const gameArea = document.querySelector('.area-game');
const gameMsg = document.querySelector('.msg-game');

let keys = {};
let player = {
    x: 0,
    y: 0,
    speed: 4,
    score: 0,
    isplay: false
};

let wall = {
    startPos: 0,
    spaceBetweenRow: 0,
    spaceBetweenCol: 0,
    wallCount: 0
};

function gameStart() {
    player.isplay = true;
    player.score = 0;
    gameMsg.classList.add('hidden');
    startBtn.classList.add('hidden');
    score.classList.remove('hidden');
    let bird = document.createElement('div');
    let wing = document.createElement('div');
    bird.setAttribute('class', 'bird');
    wing.setAttribute('class', 'wing');
    bird.appendChild(wing);
    wing.pos = 10;
    wing.style.top = wing.pos +  "px";
    gameArea.appendChild(bird);
    player.x = bird.offsetLeft;
    player.y = bird.offsetTop;

    wall.startPos = 0;
    wall.spaceBetweenRow = 400;
    wall.wallCount = Math.floor(gameArea.offsetWidth / wall.spaceBetweenRow);

    for(let i = 0; i < wall.wallCount; i++){
        createWall(wall.startPos * wall.spaceBetweenRow);
        wall.startPos++;
    }
    window.requestAnimationFrame(playGame);
}

function createWall(wallPos) {
    let totalHeight = gameArea.offsetHeight;
    let totalWidth = gameArea.offsetWidth;
    let wallUp = document.createElement('div');
    wallUp.classList.add('wall');
    wallUp.height = Math.floor(Math.random() * 350);
    wallUp.style.height = wallUp.height + "px";
    wallUp.style.left = totalWidth + wallPos + "px";
    wallUp.x = totalWidth + wallPos;
    wallUp.style.top = "0px";
    wallUp.style.backgroundColor = "orange";
    gameArea.appendChild(wallUp);

    wall.spaceBetweenCol = Math.floor(Math.random() * 250) + 150;
    let wallDown = document.createElement('div');
    wallDown.classList.add('wall');
    wallDown.style.height = totalHeight - wallUp.height - wall.spaceBetweenCol + "px";
    wallDown.style.left = totalWidth + wallPos + "px";
    wallDown.x = totalWidth + wallPos;
    wallDown.style.bottom = "0px";
    wallDown.style.backgroundColor = "black";
    gameArea.appendChild(wallDown);
}

function moveWalls() {
    let walls = document.querySelectorAll('.wall');
    let counter = 0;
    walls.forEach((item) => {
        item.x -= player.speed;
        item.style.left = item.x + "px";
        if(item.x < 0){
            item.parentElement.removeChild(item);
            counter++;
        }
    });
    for(let i = 0; i < counter / 2; i++){
        createWall(0);
    }
}

function playGame() {
    if(player.isplay){
        let bird = document.querySelector('.bird');
        let wing = document.querySelector('.wing');
        moveWalls();
        let move = false;
        if(keys.ArrowLeft && player.x > -20){
            player.x -= player.speed;
            move = true;
        }
        if(keys.ArrowRight && player.x < gameArea.offsetWidth - bird.offsetWidth + 20){
            player.x += player.speed;
            move = true;
        }
        if((keys.ArrowUp || keys.Space) && player.y > -20){
            player.y -= player.speed * 4;
            move = true;
        }
        if(keys.ArrowDown && player.y < gameArea.offsetHeight - bird.offsetHeight){
            player.y += player.speed;
            move = true;
        }
        if(move) {
            wing.pos = wing.pos === 10? 15 : 10;
            wing.style.top = wing.pos + "px";
        }
    
        player.y += player.speed * 2;

        if(player.y > gameArea.offsetHeight){
            gameOver();
        }
    
        bird.style.left = player.x + "px";
        bird.style.top = player.y + "px";
        window.requestAnimationFrame(playGame);
        player.score += 1;
        score.innerText = `SCORE : ${player.score}`;
    }
}

function gameOver() {
    let bird = document.querySelector('.bird');
    let wing = document.querySelector('.wing');
    player.isplay = false;
    score.classList.add('hidden');
    gameMsg.classList.remove('hidden');
    gameMsg.innerHTML = `
    GAME OVER <br>
    SCORE : ${player.score}점 <br>
    <p class="restart">다시 시작하려면 여기를 누르세요 :)</p>
    `
    bird.remove();
    wing.remove();
}

function pressOn(e) {
    keys[e.code] = true;

}

function pressOff(e) {
    keys[e.code] = false;

}

startBtn.addEventListener('click', gameStart);
gameMsg.addEventListener('click', gameStart);
document.addEventListener('keydown', pressOn);
document.addEventListener('keyup', pressOff);