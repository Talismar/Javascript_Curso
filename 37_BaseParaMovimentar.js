// Melhorando a movimentação

var dx = 0;
var dy = 0;
var px = 0;
var py = 0;

var jg = document.getElementById("jogador");
var intervalo = setInterval(enterFrame, 20);

function enterFrame() {
    px += dx * 10;
    py += dy * 10;
    jg = document.getElementById("jogador");
    jg.style.left = px + "px";
    jg.style.top = py + "px";
}

function load() {
    document.addEventListener("keydown", teclaDw);
    document.addEventListener("keyup", teclaUp);
}

function teclaDw() {
    var tecla = event.keyCode;
    if (tecla == 37) {
        //Esquerda
        dx = -1;
    } else if (tecla == 39) {
        //Direita
        dx = 1;
    }
    if (tecla == 38) {
        //Cima
        dy = -1;
    } else if (tecla == 40) {
        //baixo
        dy = +1;
    }
}

function teclaUp() {
    var tecla = event.keyCode;
    if (tecla == 37) {
        //Esquerda
        dx = 0;
    } else if (tecla == 39) {
        //Direita
        dx = 0;
    }
    if (tecla == 38) {
        //Cima
        dy = 0;
    } else if (tecla == 40) {
        //baixo
        dy = 0;
    }
}

window.addEventListener("load", load);