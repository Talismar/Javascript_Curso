//Recursividade uma tecnica de programação que chama a si mesmo

function contador(min, max) {
    document.write(min + "<br>");
    if (min < max) {
        //Chamando ate satisfazer a condição
        contador(++min, max);
    }
}
// Contando with Recursividade
// contador(10, 20);

//Fatorial
function fatorial(n) {
    if (n < 1) {
        return 1;
    }
    return n * fatorial(n - 1)
}
// Fatorial Recursivo
// document.write(fatorial(5));

    
// requestAnimationFrame usar a tecnica de recursividade
var obj = document.getElementById("jogador");
var ang = 0;
var anima;
function gira() {
    obj.style.transform = "rotate(" + ang + "deg)";
    ang++;
    if (ang > 360) {
        ang = 0;
    }
    anima = requestAnimationFrame(gira);
}
//window.addEventListener("load",gira); 