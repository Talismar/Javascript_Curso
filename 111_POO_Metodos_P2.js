// Metodos

class Carro{
  constructor(color){
    this.color = color
    this.ligado = false
  }

  info(){
    console.log("Informações do carro: " + this.color)
    console.log("Carro...............: " + (this.ligado ? "Ligado" : "Desligado"))
  }

  ligar(){
    this.ligado = true
  }

  desligar(){
    this.ligado = false
  }
}

let c1 = new Carro("Vermelho")
c1.ligar()
c1.info()