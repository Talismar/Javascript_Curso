//Criando o mapa
let produtos = new Map()

produtos.set("Texto", "Talismar").set("02", "Gabinete").set("03", "Monitor").set("04", "Gabinete")

/* for (i of produtos.keys())
    console.log(i) */

/* for (i of produtos.values())
    console.log(i) */

/* produtos.delete("03") */

/* for (i of produtos.values())
    console.log(i) */


/* function info(chave=true, valor=false){
    console.log("Chave: " + chave + " - Valor: " + valor)
}
produtos.forEach(info) */

console.log(produtos.values())