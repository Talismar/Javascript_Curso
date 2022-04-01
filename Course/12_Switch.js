// Curso de Javascript #12
// - Switch - case
// Switch é usado quando eu sei os valores das codições
// E com ela desparar varios comandos

var pos = 2
var msg

switch(pos){
  case 1:
    msg = "Primeiro Lugar" 
    break         

  case 2:
    msg = "Segundo Lugar"
    break

  case 3:
    msg = "Terceiro Lugar"
    break

  case 4:
    msg = "Quarto Lugar"
    break

  default:
    msg = "Default"
}

switch(pos){
  case 1:
  case 2:
  case 3:
    msg += "\nSubiu ao podio"
    break

  default:
    msg = "Default"
}

console.log(msg)