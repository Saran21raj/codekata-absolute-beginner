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
var sp= userInput[0].split(" ");
        var a= sp[0];
        var b= sp[1];
        for(var i=0; i<b;i++ ){
            console.log(a);
        }