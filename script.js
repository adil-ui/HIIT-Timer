let firstInterval = document.querySelector('#firstInterval')
let secondInterval = document.querySelector('#secondInterval')
let start = document.querySelector('#start')
let pause = document.querySelector('#pause')
let reset = document.querySelector('#reset')
let timer = document.querySelector('h6')
let body = document.querySelector('body')
let section = document.querySelector('section')
let controls = document.querySelector('.controls')
let btn = document.querySelectorAll('button')
let p = document.querySelector('p')
let update = document.querySelector('#update')

let interval;
let secoundInterval
let firstTimerCounter = firstInterval.value
let secondTimerCounter = secondInterval.value
let secondTimerPause
let timerPause
let test = false
let paused = false;
const updateTime = () => {
    timer.innerText = firstInterval.value
    firstTimerCounter = firstInterval.value
    secondTimerCounter = secondInterval.value

}
update.addEventListener('click', updateTime)
timer.innerText = firstTimerCounter

const pauseCount = () => {
    paused = true;
    if(test == true){
        clearInterval(secoundInterval);
        secondTimerPause = timer.innerText 
        secondTimerCounter = secondTimerPause
    }else{
        clearInterval(interval);
        timerPause = timer.innerText 
        firstTimerCounter = timerPause
    }
}
pause.addEventListener('click',pauseCount)

const startCount = () => { 
    if(paused && test == true) {
        secondTimerCounter = secondTimerPause
    } else if (paused) {
        firstTimerCounter = eval(timerPause) + 1;
    } else {
        firstTimerCounter = firstInterval.value
        secondTimerCounter = secondInterval.value
    }
    test = false;
    paused = false;    
    interval = setInterval(() => {
        firstTimerCounter = firstTimerCounter - 1;   
        timer.innerText = firstTimerCounter;   
        if(firstTimerCounter === 0){
            pauseCountBack();
        }
        if (firstTimerCounter <= -1) {
            clearInterval(interval); 
            test = true          
            timer.innerText = secondTimerCounter;             
            secoundInterval = setInterval(() => {                
                secondTimerCounter = secondTimerCounter - 1;   
                timer.innerText = secondTimerCounter;  
                if(secondTimerCounter <= -1){
                    clearInterval(secoundInterval);
                    timer.innerText = firstInterval.value;
                    pauseCountBack()
                    startCount();
                }
            }, 1000)         
        }   
    }, 1000);
    startCountBack()
}
const startCountBack = () => {
    section.style.backgroundColor ='#e5acb6';
    body.style.backgroundColor = '#ffc0cb';
    controls.style.backgroundColor = '#ce9aa3';
    timer.style.color = '#72565b';
    p.innerText = 'GO!';
    Array.from(btn).forEach(elt => elt.style.backgroundColor = "#72565b")
}
const pauseCountBack = () => {
    section.style.backgroundColor ='#00e5e5';
    body.style.backgroundColor = '#00ffff';
    controls.style.backgroundColor = '#00cece';
    timer.style.color = '#005c66';
    p.innerText = 'REST';
    Array.from(btn).forEach(elt => elt.style.backgroundColor = "#009090")
}
start.addEventListener('click',startCount)

const resetCount = () =>{
    if(test == true){
        clearInterval(secoundInterval);
        firstTimerCounter = firstInterval.value
        timer.innerText = firstTimerCounter;
    }else{
        clearInterval(interval);
        firstTimerCounter = firstInterval.value
        timer.innerText = firstTimerCounter;
    }
    pauseCountBack()
    
}
reset.addEventListener('click',resetCount)
