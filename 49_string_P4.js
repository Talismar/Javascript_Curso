var texto = "Talismar De de Fernandes Costa talismar"
var num =15;

//Converte um numero em string e alem disso converte as base tambem
// 2 - Binary
// 8 - Oct
// 16 - hex - Basta indicar no prototype
var res = num.toString();
console.log(res);

var texto = "         Talismar fernandes costa";
//Remove os espaço inicio e fim da string
var res = texto.trim();
//alert(texto);
console.log(res)

//Carateres especiais
var texto = "Talismar \"fernandes\" costa";
console.log(texto)

//quebra de linha para o alert so usar o \n - usasse tambem no terminal console.log()
var texto = "Talismar \nfernandes\n costa";
// alert(texto);