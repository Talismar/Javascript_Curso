
var tabela = document.getElementById("tbnotas");
var nota;

// Obtento o somatorio e armazenando em Resultado
// Començando do 1 por conta do titulo
for (let i = 1; i < tabela.rows.length; i++) {
    //parseFloat|parseInt > Para converter em numeros para obter a soma
    nota = parseFloat(tabela.rows[i].cells[1].innerHTML)+parseFloat(tabela.rows[i].cells[2].innerHTML);
    
    tabela.rows[i].cells[3].innerHTML=nota;
}

var n = [];
n[0] = document.getElementById("n1");
n[1] = document.getElementById("n2");
n[2] = document.getElementById("n3");
n[3] = document.getElementById("n4");

for (let i = 0; i < 4; i++) {
    if (n[i].innerHTML < 70) {
        n[i].style.color = "#f00";
    } else {
        n[i].style.color = "#00f";
    }
}