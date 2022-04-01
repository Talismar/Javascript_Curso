// Tratamento de erros

/* 
try{
    console.log("Talismar")
}catch(erro){
    console.log("Erro");
    console.log("Mensagem de erro " +erro.message)
}
*/
var readlineSync = require("readline-sync")

var num;
try {

    num = readlineSync.question("What is your name ? ")
    console.log(typeof num)
    if (num > 10) {
        throw new Error("Valor inválido");
    }
    console.log("Valor: " + num);
} catch (error) {
    console.log("Erro: " + error.message);
}
finally {
    console.log("Fim do tratamento")
}