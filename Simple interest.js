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
  var a=userInput[0].split(" ");
  var p= parseInt(a[0]);
  var t= parseFloat(a[1]);
  var r= parseInt(a[2]);
  var si= p * t * r/100;
  console.log(si.toFixed(2));
});