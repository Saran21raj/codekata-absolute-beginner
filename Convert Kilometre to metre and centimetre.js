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
  var s=userInput[0];
        var metre= +s * 1000;
        var cenmitre= +s * 100000;
        console.log(metre);
        console.log(cenmitre);
 
});