// Map - é uma coleção de par (key - value)

let produtos = new Map()

// Setando valores ao Map
produtos.set("01","Mouse")
produtos.set("02","Teclado")
produtos.set("03","Monitor")
produtos.set("04","Gabinete")

/* 
Outra forma de set no Map
produtos.set("01","Mouse").set("02","Teclado").set("03","Monitor").set("04","Gabinete")
*/

// Obtendo o tamanho
console.log(produtos.size)

// Obter os elementos
console.log(produtos.get("01"))

//Criando um Map com valor
let new_Map = new Map([["01", "Mouse"],
                       ["02", "Monitor"],
                       ["03", "Cadeira"],
                       ["04", "Telefone"],
                       ["05", "Casa"],
])

for (ret of new_Map){
  console.log(ret)
}