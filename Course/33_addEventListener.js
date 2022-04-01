//Eventos addEventListener - Adiciona um escutador de evento

function msg(){
    alert('Talismar')
}

function cor1(){
    var obj = document.querySelector('.dv1');
    obj.style.backgroundColor="#fff";
}    

function cor(){
    var obj = document.querySelector('.dv1');
    obj.style.backgroundColor="#f00";
}  

function addEventos(){
    var obj = document.querySelector('.dv1');
    obj.addEventListener('click', msg);
    obj.addEventListener("mouseover", cor1);
    obj.addEventListener("mouseout", cor);
}
// window.addEventListener('load', addEventos);

function msg(){
    alert('Talismar')
}

function cor(obj, cor){
    obj.style.backgroundColor=cor;
}    

function addEventos(){
    var obj = document.querySelector('.dv1');
    obj.addEventListener('click', msg);

    //Outro metodo para fazer com function anonimas
    obj.addEventListener("mouseover", function(event){
        //Chamando a função cor()
        cor(obj, "#fff");
    });
    obj.addEventListener("mouseout", function(event){
        cor(obj, "#f00");
    });
} 
window.addEventListener('load', addEventos);