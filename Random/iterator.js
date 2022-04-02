let num = [10,1,9,2,8,3,7,6,4,5]

let it = num[Symbol.iterator]()


/* Iterator in javascript */
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log("Tamanho ",num.length)




/* 
for (n of num)
    console.log(n)
 */