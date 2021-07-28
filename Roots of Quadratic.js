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
 let val= userInput[0].split(" ");
 let a= parseInt(val[0]);
 let b= parseInt(val[1]);
 let c= parseInt(val[2]);
 let bc= parseInt(4 * a * c);
 //console.log("bc",bc);
 let pow= parseInt(Math.pow(b,2));
 //console.log("pow",pow);
 let mid=parseInt(pow-bc);
 //console.log("mid",mid);
 let sq= Math.sqrt(mid);
 //console.log("sq",sq);
 let div= parseInt( 2 * a);
 //console.log("div",div);
 let quo1= parseInt(-b + sq);
 //console.log("quo1",quo1);
 let first = quo1 / div;
  let quo2= parseInt(-b - sq);
 let second = quo2 / div;
 console.log(first.toFixed(2));
 console.log(second.toFixed(2));
 
});