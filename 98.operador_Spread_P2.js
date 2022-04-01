// Spread - Explode e transforma em elementos individuais

// coleção
const produtos = [
    {
      id:"001",
      desc:["Mouse", "25.00"]
    },

    {
      id:"002",
      desc:["Teclado", "250.00"]
    },

    {
      id:"003",
      desc:["Monitor", "205.00"]
    }
]


// Para fazer uma copia de elementos pode-se usar o Spread
const p = [...produtos]

//console.log(p)

const n1 = [100,200,300]
const n2 = [400,500,600]
const n3 = [700,800,900]

// Concatenando com Spread
const n4 = [...n1,...n2,...n3]
//console.log(n4)

// Objetos
const aluno1 = {name:"Talismar", last_name:"Fernandes"}
const aluno2 = {age:"18", gender:"masculino"}
const info = {...aluno1,...aluno2}

console.log(info)