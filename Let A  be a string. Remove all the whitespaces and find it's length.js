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
    var a= userInput[0].split("");
  var count=0;
  for(i=1;i<=a.length;i++){
      if(a[i]!==" "){
         count++;
      }
  }
  console.log(count);
});