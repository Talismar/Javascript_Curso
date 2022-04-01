// REST - ...- Parametros REST

function soma(...num){
  console.log(num.length)
}

function aritmetrica(...pro){
  if (pro[1] == "-"){
    console.log("SUBTRAINDO")
    return pro[0] - pro[2]
  }
  else if (pro[1] == "+"){
    console.log("SOMANDO")
    return pro[0] + pro[2]
  }
  console.log(pro[1])
}

// soma(1,2,3)
console.log(aritmetrica(2,"+",5))
console.log(aritmetrica(2,"-",5))