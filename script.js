var timer = 60;
var Score = 0;
var hitrn = 0;

function increseScore(){
    Score += 10;
    document.querySelector("#scoreVal").textContent = Score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter ="";

for(var i = 1; i<=160; i++ ){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer(){
    var timerInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML = `<h1><Your>Game Over <br >Your Score : ${Score}</h1>`;
            clearInterval(timerInt)
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clcikednum = Number(dets.target.textContent);
    if(clcikednum === hitrn){
        increseScore();
        makeBubble();
        getNewHit();
    } 
});

runtimer();
makeBubble();
getNewHit();