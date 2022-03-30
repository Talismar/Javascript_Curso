// Curso de Javascript #10
// - IF aninhado

var score = 72
var res

if (score >= 60){
  res = "Aprovado"

  if (score == 70){
    res += " aprovado - 70"
  }
  else
    res += " Aluno aprovado"

  }
else if (score >= 40) 
  res = "Aluno em recuperação"

else
  res = "Aluno reprovado"
  

console.log(res)