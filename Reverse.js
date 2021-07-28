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
var a=userInput[0];
var b=[];
for(var i=a.length-1;i>=0;i--)
{
    b.push(a[i]);
}
console.log(b.join(""));
});