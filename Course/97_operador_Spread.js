// Spread - ele vai espalha um conjunto array|object... cada item vão virar elementos individuais
// Explode e transforma em elementos individuais

const notas = [100,60,45,70,80]

//console.log(notas)
//console.log(...notas) // retirando do array

// Interando sobre um array e obtendo a soma
function soma(...n1){
  let res = 0
  for (let n of n1){
    res += n
  }
  return res
}
//console.log(soma(...notas))

const jogador = [
  nome="Talismar",
  pontos = 100,
  vidas = 7
]

console.log(...jogador)