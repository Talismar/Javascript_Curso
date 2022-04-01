// Vetor unidimencional

let vetor = [100, 50, 40, 60, 90, 60]
//vetor.sort() //Colocar valores em ordem

let encontrei = vetor.indexOf(90) //Encontra posicao
console.log(`O valor 3 está na posição ${encontrei}`)

for (let t in vetor) {
    console.log(`A posição ${t} é ${vetor[t]}`)
}