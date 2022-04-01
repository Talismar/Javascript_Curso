var linhas = 20  /* prompt("Digite a quantidade de linhas da matriz") */;
var colunas = 20 /* prompt('Digite a quantidade de colunas') */;
console.log(`Matriz criada com ${linhas} e ${colunas}`)

var matriz = [];
for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = '';
        if (i == 10 && j == 10) {
            matriz[i][j] = ' @ '
        }
        else {
            matriz[i][j] = ' + '
        }
    }
}

var valores = '';
for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        if (j < colunas - 1) {
            valores += matriz[i][j];
        }
        else {
            valores += matriz[i][j] + "\n";
        }
    }
}

console.log("Conteudo da matriz:\n" + valores);