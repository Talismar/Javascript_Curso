// Herança

class Carro{
  constructor(comb){
    this.comb = comb
    this.ligado = false
    this.tipoCom = "Gasolina"
  }

  info(){
    console.log("Quant........: " + this.comb)
    console.log("Estado.......: " + this.ligado)
    console.log("Type.........: " + this.tipoCom)
  }

  ligadon(){
    return this.ligado
  }

}

class CarroCombate extends Carro{
  constructor(comb){
    // referencia a class pai
    super(comb)
  }

  // Polimorfismo
  info(){
    console.log(this.tipoCom)
    console.log(this.comb)
    console.log(this.ligado)
  }
}

class CarroTrans extends Carro{
  constructor(n){
    super(n)
  }
}

c1 = new CarroCombate(100)
c1.info()

c2 = new CarroTrans(100)
c1.info()