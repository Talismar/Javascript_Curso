// Static - é um tipo que se aplica dentro da class que se referencia a um
// unico endereço de memoria - Logo mudando o seu valor em uma isntancia
// Se a plica pra todos

// Lembrando que pode usar em propriedade e em metodos

class Carro{
  // Em todos os objetos vão aponta para o mesmo endereço
  static alerta = true

  constructor(color){
    this.color = color
    this.ligado = false
  }

  info(){
    console.log("Informações do carro: " + this.color)
    console.log("Carro...............: " + (this.ligado ? "Ligado" : "Desligado"))
  }

  static ligar(){
    this.ligado = true
  }

  set set_alerta(n){
    Carro.alerta = n 
  }

  desligar(){
    this.ligado = false
  }

  // opcional usar a key word set or set a diferença é que
  // se usar o set e o get atribuimos com o = 
  set set_color(c){
    this.color = c
  }

  get get_color(){
    console.log(this.color)
  }
}

let c1 = new Carro("Vermelho")
c1.ligar()
c1.set_color = "Yellow"
c1.info()

c1.get_color