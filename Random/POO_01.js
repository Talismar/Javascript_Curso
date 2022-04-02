class Carro {
    constructor(nome, velMax) {
        this.__nome = nome
        this.__velMax = velMax

        console.log(this.__nome)
    }

    movimentar() {
        console.log(this.__nome)
    }

    set nome(nome) {
        this.__nome = nome
    }

    get nome() {
        console.log("GETTERS")
        return this.__nome
    }
}

let c1 = new Carro("Gol", 100)

c1.nome = "Golf"
c1.movimentar()
console.log(c1.nome)
console.log(c1.nome)