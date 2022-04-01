
function move(){
    //var obj=document.getElementById("dv1")
    var tecla=event.keyCode;

    if(tecla == 37){
        px-=10;
        obj.style.left=px+"px";
    }
    else if(tecla==38)
    {
        py-=10;
        obj.style.top=py+"px"
    }
    else if(tecla==39)
    {
        px+=10;
        obj.style.left=px+"px";
    }
    else if(tecla==40){
        py+=10;
        obj.style.top=py+"px";
    } 
    else if(tecla==13){
        obj.style.backgroundColor="#fff"
        alert('Evento keydown Removido')
        document.removeEventListener("keydown", move);
    }
}
function addClique(){
    document.addEventListener("keydown", move)
    obj.style.backgroundColor="red"
}

function  iniciar(){
    obj=document.getElementById("dv1")
    obj.addEventListener("click", addClique)
}

var px =0;
var py=0;
var obj

window.addEventListener("load", iniciar);
