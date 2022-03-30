


//querySelector()
var ps =document.querySelectorAll("p");
//document.write(ps[0].innerHTML);
//Mudando style > ps[0].style.color="blue";
//Mudando texto > ps[0].innerHTML="NOVO TEXTO";

var elementos =document.querySelectorAll(".titulo");
for(var i=0; i<elementos.length;i++)
{
    //Imprimindo todos os elementos que usam a class titulo
    // document.write(elementos[i].innerHTML+"<br>")
}

//var elementos =document.querySelectorAll("p.titulo");

//Todos os elementos que estao dentro de uma div usa *
//var elementos =document.querySelectorAll("div > *");

//Todos os elementos que estao dentro de uma div e que é p
//var elementos =document.querySelectorAll("div > p");

var elementos =document.querySelectorAll("p, h1, h2");
for(var i=0; i<elementos.length;i++)
{
    document.write(elementos[i].style.color="red");
}