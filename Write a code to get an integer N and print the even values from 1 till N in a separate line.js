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
  for(i=1;i<=a;i++){
      if(i%2==0)
      {
        console.log(i);
           }
      
  }
});