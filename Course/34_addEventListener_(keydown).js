
//Eventos addEventListener
var px = 0;
var py = 0; 

/* document.addEventListener("keydown", function(event){
    var obj=document.querySelector('.dv1');
    console.log(event);
    var tecla=event.keyCode;
    //37 > Esqueda - 38 > Cima - 39 > Direita - 40 > Baixo
    if (tecla == 37) {
        px-=10;
        obj.style.left=px+"px";
    }else if (tecla == 38) {
        py-=10;
        obj.style.top=py+"px";
    }else if (tecla == 39) {
        px+=10;
        obj.style.left=px+"px";
    }else if (tecla == 40) {
        py+=10;
        obj.style.top=py+"px";
    }
}); */


function move(){
    var obj=document.querySelector('.dv1');
    console.log(event);
    var tecla=event.keyCode;
    // 37 > Esqueda - 38 > Cima - 39 > Direita - 40 > Baixo
    if (tecla == 37) {
        px-=10;
        obj.style.left=px+"px";
    }else if (tecla == 38) {
        py-=10;
        obj.style.top=py+"px";
    }else if (tecla == 39) {
        px+=10;
        obj.style.left=px+"px";
    }else if (tecla == 40) {
        py+=10;
        obj.style.top=py+"px";
    }
    else if (tecla == 13) {
        alert("Evento Removido")
        document.removeEventListener("keydown", move);        
    }
}
document.addEventListener("keydown", move);

function ativa(){
    var obj=document.querySelector('.dv1');
    var tecla=event.keyCode;
    if (tecla == 65) {
        alert("Evento Adicionado Novamente")
        document.addEventListener("keydown", move);
    }
    
}    

document.addEventListener("keydown", ativa);
