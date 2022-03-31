
var jog;
var vel;
var dx;
var dy;
var px;
var py;
var anima;
var estado; 

//requestAnimationFrame 
function inicia(){
    vel=2;
    dx=1;
    dy=0;
    px=0;
    py=0;
    estado=1;
    document.getElementById("pare").addEventListener("click", Parar);
    document.getElementById("inicio").addEventListener("click", Iniciar);
    jog=document.getElementById("jogador");
    jog.addEventListener("click", moverParar);
    game();
}

function moverParar(){
    if(estado){
        estado=0;
        jog.style.backgroundColor="#f00";
        cancelAnimationFrame(anima);
    }    
    else
    {
        estado=1;
        jog.style.backgroundColor="#00f";
        anima=requestAnimationFrame(game);
    }
}

function Iniciar(){
    if(!estado){
        estado=1;
        jog.style.backgroundColor="#f00";
        anima=requestAnimationFrame(game);
    }   
}

function Parar(){
    estado=0;
    jog.style.backgroundColor="#00f";
    cancelAnimationFrame(anima);
}


function game(){
    px+=dx*vel;
    //px+=dy*vel;
    jog.style.left=px+"px";
    //jog.style.left=px+"px";
    if (px > 800) {
        dx=-1;
    }else if(px < 0){
        dx=1;
    }
    anima=requestAnimationFrame(game);
}

window.addEventListener("load", inicia);
