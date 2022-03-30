// Curso de Javascript #18

// Primeiro modelo de laço for - Javascript

// for (let i = 0; i < 100000; i++){
//   console.log(i)
// }

var mochila = []

// preenchendo vetor unidimencional
for (var i = 0; i < 10; i++){
  mochila[i] = i
}

// console.log(mochila)

var matriz = new Array()

for (var i = 0; i < 10; i++){
  matriz[i] = []
  for (var j = 0; j < 3; j++){
    matriz[i].push(j)
  }
}

console.log(matriz)