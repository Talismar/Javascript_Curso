//Funções

function escreve(){
    document.write("Curso de Javascript");
}
escreve();
document.write("<br>")

function soma(a, b){
    document.write("Soma > " + a + b + "<br>");
}
soma(2,5);
soma(2,50);
soma(2,20);

function soma1(a, b){
    return a + b;
}
var res = soma1(50,60);
document.write("Soma1: " + res + "<br>");

var numeros = new Array(10,10,10,20);

function media(nums){
    var tam = nums.length;
    let soma = 0;
    for (let i = 0; i < tam; i++) {
        soma+=nums[i];
    }
    return Math.round(soma/tam);
}

document.write("Media: " + media(numeros));