/* 
Passo:
Depois da lista feita
2. Sortear uma palavra
3. Fazer um campo para o usuario entra com uma letra, se existe a letra é um acerto, senão 
desenhe os braços a cabeça que simula o jogo da forca
*/

// Criando um lista de palavras
var list_word = ["Self", "This", "Morning", "Afertnoon", "Shipping"]

function raffling() {
  return list_word[Math.round(Math.random() * (list_word.length - 1))].toLowerCase()
}
var word = raffling()
document.querySelector("p").innerHTML = word


var content_erros = document.querySelector(".erros")
var input = document.getElementById("inp")
var btn = document.getElementById("sub")

// input.value = "Talismar"

function forca() {
  // Verificar se o Entry esta preenchido

  if (word.includes(input.value)) {
    console.log(input.value)
    input.value = ""
  }

  else {
    content_erros.innerHTML += "-"
    input.value = ""
  }

}

// Falta concluir esse desafio

btn.addEventListener("click", forca)