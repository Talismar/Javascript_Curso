console.log(Math.ceil(10.5))
console.log(Math.floor(10 * Math.random() + 1))
console.log(Math.floor(Math.random() * 10))

// console.log([...Array(10).keys()])
// console.log(Array.from({length: 20+1}, (x, i) => i))
// console.log(Array.from(Array(6), (e, i) => i + 5))

/**
   * Docstring
   * This is function 
*/
function sequence(x, y){
  
  return Array.from(Array((y - x) + 1), (e, i) => i + x)
}

console.log(sequence(80,100))


// Docstring in Javascript
/**
 * @name Number_random
 * @description Function with return number random
 * @param {string} x 
 * @param {Number} y 
 * @returns Number randons
 */
function Number_random(x, y){
  let list = sequence(x, y)
  let randomNumber;
  let tmp;

  for (let i = list.length; i;) {
    // Normalize - bit a bit that round down
    // randomNumber = Math.random() * i-- | 0;

    // Normalize with Math.floor that round down
    randomNumber = Math.floor(Math.random() * i--)

    // Variavel temporaria
    tmp = list[randomNumber];
    
    // troca o número aleatório pelo atual
    list[randomNumber] = list[i];
    
    // troca o atual pelo aleatório
    list[i] = tmp;
  }

  return list
}

console.log(Number_random(0,5))
console.log(Math.random() * 5 | 0)

// Normalizando com operator bit a bit
console.log(5 | 0)