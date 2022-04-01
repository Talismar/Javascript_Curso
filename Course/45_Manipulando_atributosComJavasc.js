
//setAttribute para atribuir um atributo
function trocaCarro(c) {
    var obj =  document.getElementById("carro");
    
    if (c==1) {
        obj.setAttribute("class", "c1")
    }
    else if (c==2) {
        obj.setAttribute("class", "c2")
    }
    else if (c==3) {
        obj.setAttribute("class", "c3")
    }
}

//removeAttribute remove o atributo
function removeCarro(){
    var obj =  document.getElementById("carro");
    obj.removeAttribute("class");
}

//hasAttribute verifica se tem alguma atributo atributo
function verefica(){
    var obj =  document.getElementById("carro");
    
    if(obj.hasAttribute("class")){
        alert("Atributo class esta na tag");
    }
    else{
        alert("Sem atributo class");
    }
}
