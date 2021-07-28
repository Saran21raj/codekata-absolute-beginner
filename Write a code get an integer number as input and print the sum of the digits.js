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
   var a=userInput[0].split("");
    var b=0;
    for(i=0;i<a.length;i++){
        b= parseInt(b)+parseInt(a[i]);
    }
    console.log(b);
});