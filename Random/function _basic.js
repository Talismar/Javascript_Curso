
//Numero par ou impar
function parimp(num) {
    if (num % 2 == 0) {
        return 'Par'
    }
    else
        return 'Impar'
}
//console.log(parimp(222))

//Somando numeros
function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}
//console.log(soma(2, 9))

//variavel com funcao
let v = function (x) {
    return x * 2
}
//console.log(v(6))

//Fatorial
function fatorial(n) {
    let fat = 1
    for (var c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

//Fatorial com recursividade
function fato(n) {
    if (n == 1) {
        return 1
    }
    else
        return n * fato(n - 1)
}
console.log(fatorial(5))