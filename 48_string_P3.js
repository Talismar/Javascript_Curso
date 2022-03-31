


var texto = "Talismar De de Fernandes Costa talismar"
var txt2="Talismar";

//indexOf retorna a posição do determinado caracter
var res=texto.indexOf("t");
console.log(res);

//Encontrar o ultimo caracter encontrado
var res=texto.lastIndexOf("e");
//console.log(res);

//Comparação de duas strings sao iguais ou não - 0 = iguais e != 0 são diferentes
var res= texto.localeCompare(txt2);
console.log(res);

//Corta a string em um texto especifico
var res=texto.slice(0, 8);
//console.log(res);

//Pica toda a nossa string no carater que indicar, divide o texto de acordo com a strig que foi selecionada nele e transformar em vetor a variavel
var res=texto.split(" ");
//console.log(res[2]);

//Indicar a posicao inicial e o tamanho do corte - Semelhante ao slice
var res= texto.substr(0, 8);
console.log(res);

//Convertendo o texto para Mausculo e cortando o texto
var res=texto.toUpperCase().substr(0,8);

//Minusculo
// var res = texto.toLowerCase();
console.log(res);
