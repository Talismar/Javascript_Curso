//Classe > Math

// Constante PI
// document.write(Math.PI);

// Metodos
// abs - retorna o valor absluto
var valor = -10; 
var mt = Math.abs(valor); 
document.write(mt);

// Arredondamento para cima
var valor = 10.5; 
var mt = Math.ceil(valor);
document.write("<br>" + mt);

// Arredondamento para baixo
var valor = 10.8; 
var mt = Math.floor(valor);
document.write("<br>" + mt);

// Arredondamento para padrão
var valor = 10.6; 
var mt = Math.round(valor);
document.write("<br>" + mt);

// Potencia
var valor = 10; 
var mt = Math.pow(valor,2);
document.write("<br>Potencia: " + mt);

// Raiz quadrada
var valor = 10; 
var mt = Math.sqrt(valor);
document.write("<br>SQRT: " + mt);

//Numeros aleatorio
for (let i = 0; i < 6; i++) {
    var mt = Math.round(Math.random()*100);     
    document.write("<br>" + mt);    
}

// Senso e Cosseno
document.write("<br>Cosseno: " + Math.cos(45 * Math.PI/180) + "<br> Seno " + Math.sin(45 * Math.PI/180))

// Retornando os valores max e min de uma sequencia
console.log(Math.max(1,2,5))
console.log(Math.min(1,2,5))

// Em um array
var ar = [1,2,3,4,5]
console.log(Math.max.apply(null,ar))