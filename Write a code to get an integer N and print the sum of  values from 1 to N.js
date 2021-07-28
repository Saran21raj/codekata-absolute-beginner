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
  var sum=0;
  for(var i=1;i<=a;i++){
      sum = parseInt(sum) + parseInt(i);
  }
  console.log(sum);
});