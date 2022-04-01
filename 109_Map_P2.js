// Map - é uma coleção de par (key - value)

//Criando um Map com valor
let new_Map = new Map([["01", ["Mouse", "10,00"]],
                       ["02", ["Monitor", "10,00"]],
                       ["03", ["Cadeira", "10,00"]],
                       ["04", ["Telefone", "10,00"]],
                       ["05", ["Casa", "10,00"]],
])

// Limpando todo o Map
// new_Map.clear()
// console.log(new_Map)

// Limpando um key especifica
// new_Map.delete('03')
// console.log(new_Map)

for (p of new_Map){
  // Retorna as keys
  //console.log(p[0])

  // Retorna os values
  // console.log(p[1])

  // Pegando um determinado posição de um values
  console.log(p[1][1])
}


let produtos = new Map([["01", "Mouse"],
                       ["02", "Monitor"],
                       ["03", "Cadeira"],
                       ["04", "Telefone"],
                       ["05", "Casa"],
])

function info (key, value){
  //console.log("Key: " + key + " Value: " + value)
}

// Chama um função com cada elemento do meu Map - Sempre passando o key e value
produtos.forEach(info)

// keys - Retorna um iterator com todas as keys do map
let it = produtos.keys()
console.log(it.next().value)

// Values - Retorna um iterator com as values do Map
let itV = produtos.values()
console.log(itV.next().value)

// has - Verifica se o elemento tem no Map e retorna true or false
console.log(produtos.has("02"))