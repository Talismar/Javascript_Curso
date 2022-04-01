/*
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

inp.question("What is your name? ", function (answer) {
    console.log(`Oh, so your name is ${answer}`);
    inp.close();
  });
*/

/*
process.stdin.on("data", function (data) {
  console.log(data.toString())
})
*/

// Input para o terminal
var readlineSync = require("readline-sync")
var nome = readlineSync.question("What is your name ? ")

console.log(nome)