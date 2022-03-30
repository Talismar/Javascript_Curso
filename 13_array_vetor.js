// Curso de Javascript #13
// primeira forma de criar um array
//var cor = new Array()

// segunda maneira
var cor = []

aux = 0
for (const iterator of ["red", "green", "black"]) {
  //cor.push(iterator)
  cor[aux] = iterator
  aux += 1
}

for (let step = 0; step < 100; step++){
  cor[aux] = step
  aux += 1
}

console.log(cor)