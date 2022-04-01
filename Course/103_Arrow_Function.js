//Arrow Function é um tipo de função anonima

const soma = (p1, p2) => {
    return p1 + p2
}
console.log(soma(2,2))

const soma1 = (...p2) => {
  let con = 0
  for (n of p2){
    con += n
  }
   
  return con
}
console.log(soma1(2,2,2,2,2,2,2,2,2,2,2))


const par = num => {
  if (num % 2 == 0)
    return true
  else
    return false
}

console.log(par(6) ? "É par" : "Não é par")