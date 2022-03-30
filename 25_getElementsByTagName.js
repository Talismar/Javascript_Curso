// getElementsByTagName - Para alterar varios tag HTML de unica fez
// Pega varios elementos com as mesma tags - Retorna um array

var tagP = document.getElementsByTagName("p")

// Pegando o valor de determinado p
// document.write(tagP[2].innerHTML);
// document.write(tagP[0].innerHTML);

// Aplicando style a um p especifico
// tagP[2].style.color="red"

// Aplicando estilo a todos os p
/* 
for (var i = 0; i < tagP.length; i++) {
    (tagP[i].style.color = "blue")
} 
*/

/* 
tagP[2].style.color="red";
tagP[0].style.color="red"; 
*/

//para pegar todos os elementos do html em fez de p usasse *.
/*
var tags = document.getElementsByTagName("*");
tags[9].style.color="red" 
*/