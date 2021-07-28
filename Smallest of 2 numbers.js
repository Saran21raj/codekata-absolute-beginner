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
        if(a<b){
            console.log(a);
        }
        else
        {
            console.log(b);
        }
});