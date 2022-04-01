// Curso de Javascript #14

// primeira forma de criar um array
//var cor = new Array()

// segunda maneira
var cor = []

// Inserir no final do array
cor.push("red")

// Inserir no inicio do array 
cor.unshift("green")
cor.unshift("orange")

// Remove end elemento
//cor.pop()

// Remove o primeiro elemento
// cor.shift()

// Remove de qualquer index - o splice permite remover mais de um elemento start and end
cor.splice(0,1)



console.log(cor)