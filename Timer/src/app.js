const txtHrs = document.querySelector('#inpHrs');
const txtMin = document.querySelector('#inpMin');
const txtSec = document.querySelector('#inpSec');

const startBtn = document.querySelector('.btn-start');
const pauseBtn = document.querySelector('.btn-pause');
const resetBtn = document.querySelector('.btn-reset');

/**
 * 시간 분 초 입력가능  - V
 * start를 누르면 타이머 1초단위로 감소
 * pause를 누르면 타이머 멈춤
 * 다시 start를 누르면 재시작
 * 0초가 되면 초기화
 * reset을 누르면 초기화
 */ 

let timer = {
    hrs: 0,
    min: 0,
    sec: 0,
    totalSec: 0
}

/*
https://www.figma.com/file/sLvbsD1OFGys44bpKTWzwi/%EB%A9%8B%EC%82%AC-%EB%B0%98%ED%8E%B8%EC%84%B1-%EB%AC%B8%EC%A0%9C-%3A-Timer?node-id=2%3A548&t=L8saP2KL1E88TNDn-0
*/

function btnActivate() {
    const disabledStart = startBtn.querySelector('img');
    const disabledReset = resetBtn.querySelector('img');

    if(txtHrs.value > 0 || txtMin.value > 0 || txtSec.value){
        startBtn.removeAttribute('disabled');
        resetBtn.removeAttribute('disabled');
        disabledStart.setAttribute("src", "./src/images/start-default.png");
        disabledReset.setAttribute("src", "./src/images/reset-default.png");
    }
    console.log(timer.totalSec);
}

function startTimer() {
    pauseBtn.classList.remove('hidden');
    console.log('꺄아아아')
}

function pauseTimer() {
    console.log('멈춤~');
    pauseBtn.classList.add('hidden');
}

function resetTimer() {
    console.log('꺄꺄룽~2');
}

txtHrs.addEventListener('input', btnActivate);
txtMin.addEventListener('input', btnActivate);
txtSec.addEventListener('input', btnActivate);

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
pauseBtn.addEventListener('click', pauseTimer);