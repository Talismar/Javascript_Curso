// Controle de intervalo em JS

//setTimeout e setInterval
//Mudar a cor toda a fez que a pagina é atualizada
/* function mudaCor(){
    var obj = document.querySelector(".dv1");
    obj.innerHTML="Talismar"
    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);
    obj.style.backgroundColor="rgb("+r+","+g+","+g+")";
}

window.addEventListener("load", mudaCor); */

var tmp;

//Automatica
function mudaCor() {
    var obj = document.querySelector(".dv1");
    //Gerar os numeros aleatorios para fazer a troca de cor
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    obj.style.backgroundColor = "rgb(" + r + "," + g + "," + g + ")";
}

//Função para chamar e o tempo em milisegundos
//Porem o setTimeout so chama uma fez a funcao
/* setTimeout(mudaCor, 3000); */

//Funcao setInterval chama varias vezes
/* setInterval(mudaCor, 1000); */

function iniciar() {
    tmp = setInterval(mudaCor, 100);
}

function parar() {
    clearInterval(tmp);
}

function addEventos() {
    //Ativa a função parar
    document.querySelector("#bt2").addEventListener("click", parar);
    //Ativa a Função Inicio
    document.querySelector("#bt1").addEventListener("click", iniciar);
}

//Chamando a função de incio aonde tem os eventos dos Botões
window.addEventListener("load", addEventos);
