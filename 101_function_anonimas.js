//Function Anonima

const alo = function(){
  return "Hello world"
}

const soma = function(...n){
  let res = 0
  for (na of n){
    res += na
  }
  return res
}

console.log(alo())
console.log(soma(2,5,6))