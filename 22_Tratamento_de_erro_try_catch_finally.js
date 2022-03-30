// Curso de Javascript #22
//Tratamento de erros try { } catch

// Erro na linha 6 lo - log
/* try{
    console.lo('Talismar')
}catch(erro){
    console.log('Erro');
    console.log(erro.message) // A mensagem de erro
} */

/* var num;

try {
    num = 10 / 0;
    console.log(num);
} catch (erro) {
    console.log('Erro');
    console.log(erro.message) //Vendo o erro
} */

var num; //maximo é 10
try {
    num = 15

    // Se num for maior que 10 vai gerar o erro correspondente
    if (num > 10) {
        throw new Error("Valor invalido");
    }
    console.log("Valor: " + num);

} catch (erro) {
    console.log('Erro');
    console.log(erro.message) //Vendo o erro correspondente ao que foi configurado
}
finally{
    console.log("Fim do tratamento: " + num);
}