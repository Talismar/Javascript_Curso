//Funcoes com return
var numeros =[10,20,30,40,50]
function media(nums){
    var tam = nums.length
    soma =0
    for(let i=0;i<tam;i++)
    {
        soma+=nums[i];
    }
    return Math.round(soma);
}
console.log(media(numeros))

//Funcoes sem return
function soma2(n1,n2){
   console.log(n1 + n2) 
}
soma2(2,3)

function escrever(){
    console.log("Apreendendo Javascript")
}
escrever()



//Com return
function teste(){
    return "Talismar"
}
console.log(teste())

function test(n2,n3){
    return n2 * n3 + " Aqui a resposta"
}

console.log(test(5,5))