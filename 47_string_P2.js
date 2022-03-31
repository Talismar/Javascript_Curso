
var texto = "Talismar De de Fernandes Costa talismar"

//search - retorna a primeira posição encontrada
var res=texto.search(/Talismar/i);
console.log(res);

//replace - substituir
var res=texto.replace(/Talismar/i,"Talison");
console.log(res);

//Para substituir todas as palavras so acrescentar o ig - ignora letras lower and upper
var res=texto.replace(/Talismar/ig,"Talison");
console.log(res);

//Retorna o caracter que voce indicar a posicao
var res=texto.charAt(0);
console.log(res);

//Retorna o código do caractere na posição indicada como parâmetro do método.
var res= texto.charCodeAt(0);
console.log(res);

//Converte o codigo do charCodeAt para O valor dela - fromCharCode
var res=texto.charCodeAt(0);
//console.log(res+"<br>");
//console.log(String.fromCharCode(res));

//Concatena, funde, une, junta uma string em outra, no código a seguir juntamos as strings txt1 e txt2.
//var txt2 = " - Fernandes Dias"
//var res=texto.concat(txt2);
//ou assim
var res=texto.concat(" - Fernandes Dias" + " Qualquer coisa");
console.log(res);

// Outra forma de concatenar
var texto02 = "Talismar"
texto02 += " Fernandes"
console.log(texto02)