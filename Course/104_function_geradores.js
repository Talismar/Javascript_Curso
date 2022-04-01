// Funções geradoras - Permite a devolução do controle para quem fez a chamada da função
// A função normal de uma função normal ela devolve no final da execução
// A função geradora ela devolve o controle a qualquer momento no meio do processo

// Devolve um iterator
// Precisa especificar o yield para fazer a colheita
function* cores(){
  yield "Vermelho"
  yield "Verde"
  yield "Azul"
  yield "Amarelo"
  yield "Roxa"
}

// Imprindo todo o conteudo da função geradora
/* 
for(let c of cores()){
  console.log(c)
} 
*/

const c =  cores()
//console.log(c.next())

// yield - a função dele é devolver o controle pra quem chamou
// Se retirar o yield ele devolver o todo o conteudo
// yield trabalha junto com o next()
function* cont(n){
  let c = 0
  while (c<n){
    yield console.log(c)
    c++
  }
}

const ct = cont(10)
ct.next().value
ct.next().value
ct.next().value
ct.next().value