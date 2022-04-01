// Escopo de variaveis
// Usando o this.nomevariavel se refere-se a variavel global

var nomeCor = "Vermelho"
var i=0;

function cor(){
    var nomeCor = "Azul";
    document.write(nomeCor+"<br>"+this.nomeCor+"<br>");
}

cor();
document.write(nomeCor);