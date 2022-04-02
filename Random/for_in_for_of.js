const aluno = { nome: "Talismar", age: "25" }
const notas = [100, 80, 75, 30]

for (var n of notas) {
    console.log(n)
}

// print keys
for (var n in aluno) {
    console.log(n)
}

// print values
for (var n in aluno) {
    console.log(aluno[n])
}