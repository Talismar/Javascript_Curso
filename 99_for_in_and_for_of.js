// for in and for of - loops

// for in - usado para percorrer as propriedades de um objeto
const aluno = {nome:"Talismar", sobrenome:"Fernandes"}

// Propriedade
for (var dado in aluno){
  console.log(dado)
}

// Valor da propriedade
for (var dado in aluno){
  console.log(aluno[dado])
}

// for of - usado para percorrer Array
var array_notas = new Array(70,60,80,60,56,50)
var aprovados = 0
var reprovados = 0

for (let n of array_notas){
  n>60?aprovados++:reprovados++  
  console.log(n)
}

console.log("Aprovados > " + aprovados, "\nReprovados > " + reprovados)