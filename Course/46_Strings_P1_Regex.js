
var texto = "Talismar Fernandes Costa 1998"

//Encontrando Palavras
var res=texto.match("Talismar");
//console.log(res.length);

//Com o g ele Pesquisar a paçavra que estar dentro de / /
var res=texto.match(/de/g);

//Com o i ele enchegar todos inclusive letras maius ou minu
var res=texto.match(/de/ig);
console.log(res + " : "+res.length);

//Indice para localizar melhor
console.log(res[0]);

//Localizando mais de uma letra
var res=texto.match(/[oa]/ig);
console.log(res + ": " + res.length);

//Procurar sem as letras que estao dentro de /[^letrar]/ ^ Negação
var res=texto.match(/[^oa]/ig);
console.log(res + ": " + res.length);

//Procurar sem as letras entre a-g /[^a-g]/
var res=texto.match(/[a-g]/ig);
console.log(res + ": "+res.length);

// Não Numerais
var res=texto.match(/[\w]/ig);
console.log(res + ": "+res.length);

// Caracteres especiais
var res=texto.match(/[\W]/ig);
console.log(res + ": "+res.length);

var res=texto.match(/[s]+/ig);
console.log(res + ": "+res.length);

// Numeros
var res=texto.match(/[\d]/ig);
console.log(res + ": "+res.length);