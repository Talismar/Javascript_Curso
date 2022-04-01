// Iterator

let num = [10,1,9,2,8,3,7,6,4,5]

/* 
for(n of num){
  console.log(n)
}
*/

// Criando o iterator
let it = num[Symbol.iterator]()
//console.log(it.next().value)
//console.log(it.next().value)

for(let i=0; i < num.length;i++){
  let res = it.next().value
  if (res % 2 == 0){
    console.log("Par")
  }
  else{
    console.log("Impar")
  }
}