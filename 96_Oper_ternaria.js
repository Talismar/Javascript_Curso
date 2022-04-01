// operações ternária tipo de condição em unica linha, podendo ser associada a uma variavel
// Sintaxe
// teste lógico ? SE verdadeiro : SE falso

console.log(5<4?"É maior":"É menor")

5==4?console.log("É igual"):console.log("É diferente")

// Inserindo mais conteudo

/* 
5==4?
(
  console.log("É igual")
)
:
(
  console.log("É diferente")
) 
*/

// Associando a uma variavel
let op = true

const r = op ? "Igual" : "Diferente"
//const r = !op ? "Igual" : "Diferente" - Negando
//console.log(r)

// Se for false ele retorna o valor da op - Se for verdade ele retorna o que esta apos o &&
// Se o op for = a false ele retorna false como resposta
const r2 = op && "Igual"
console.log(r2)