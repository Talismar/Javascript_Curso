
const latinhas = ["Koka-kola", "Esprite"]

latinhas.push("coleca")


const latinhasAtualizadas = latinhas.filter(function (latinha) {
    return latinha !== 'Esprite';
})

const latinhaKoka = latinhas.find(function(latinha){
    return latinha == 'Koka-kola'
})

//console.log(latinhaKoka)

//Encontrar aparti de alguma posição
console.log(latinhas.includes("coleca", 0));


console.log(latinhas.slice(-1));