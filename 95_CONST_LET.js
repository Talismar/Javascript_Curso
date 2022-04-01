// CONST - LET - VAR

// Com var é permitido porem com o let não é permitido
// Com let so é permitido uma variavel no mesmo escopo
var num = 10
var num = 100
console.log(num)

// Permitido porem com let não é
{
  var a = 100
  //let a = 100
}
//console.log(a)

// Const é usado quando queremos que um determinado valor não se altere ao decorrer do programa

const dobro = (n)=>{
  return n * 2
}

console.log(dobro(2))