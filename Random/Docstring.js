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