// Object literais - Serve como container de dados

// Propriedades e metodos
const Carro = {
  marca: "VW",
  modelo: "Golf",
  info: function(){
    console.log("Marca: " + this.marca)
    console.log("Modelo: " + this.modelo)
  }

}

// Imprimindo
//console.log(Carro.marca)
//console.log(Carro["marca"])

// Redefinido o objeto
//Carro.modelo = "Gol"
//Carro["marca"] = "GM"

//Carro.info()

// Criando um novo objeto - Lembrando se não alterar o c2 ele pegar inicia com os ultimos valores de Carro
let c2 = Object.create(Carro)
c2.modelo = "Palio"
c2.marca = "HRV"
//c2.info()

const Veiculo = {
  marca: "VW",
  modelo: "Golf", 
  info: function(){
    console.log("Marca: " + this.marca)
    console.log("Modelo: " + this.modelo)
  }
}

const Caracter = {
  cor: "cinza",
  cambio: "Altomatico", 
}

// Deletando uma propriedade
//delete Caracter.cor

// Juntando dois objectos - Mesclagem
const Carro01 = Object.assign(Veiculo, Caracter)

console.log(Carro01)
//Carro01.info()

// Extrair dados de um determinado object
// marca e modelo são individual então se eu alterar não vai alterar elas
// Pois isso so é uma maneira de extrair um determinado valor de uma propriedade
let {marca, modelo} = Carro
//console.log(marca + " - " + modelo)


