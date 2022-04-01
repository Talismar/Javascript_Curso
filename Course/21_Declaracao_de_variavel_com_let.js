// Curso de Javascript #21
//Let variavel so existe no escopo que foi declarada

let num = 10;

console.log(num);

if (num == 10) {
    let num = 5
    console.log(num);
}

console.log(num);