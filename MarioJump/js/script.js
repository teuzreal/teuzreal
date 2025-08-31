const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvens = document.querySelector('.clouds');

let pontos = 0;
const score = document.getElementById("score");

const jump = () =>{
    mario.classList.add('jump');

    setTimeout(() =>{

        mario.classList.remove ('jump');

    }, 500)
}

const loo = setInterval(() =>{

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPositon = +window.getComputedStyle(mario).bottom.replace('px', ''); 

    console.log(pipePosition)

    if (pipePosition <= 145 && pipePosition > 0 && marioPositon < 80){
        
        pipe.style.animation = 'none'; 
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPositon}px`;
        
        mario.src = './img/game-over.png';
        mario.style.width ='110px'
        mario.style.marginLeft = '50px'

        clearInterval(loop); 

        console.log(pontos)

    } else {
        pontos++;
        score.textContent = `Pontos: ${pontos}`;
    }

},10);

document.addEventListener('keydown', jump) 