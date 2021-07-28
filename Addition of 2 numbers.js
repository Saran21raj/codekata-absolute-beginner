// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 var a= parseInt(userInput[0]);
 var b= parseInt(userInput[1]);
 var c= a + b;
 console.log(c);
});