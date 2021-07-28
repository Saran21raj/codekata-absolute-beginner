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
 var us= userInput[0].split(" ");
 var a=us[0];
 var b=us[1];
 var min= Math.min(a,b);
// console.log(min);
 if(a % min==0 && b % min==0)
 {
 console.log(min)
 }
 else{
     for( var i= min/2;i>=1;i--){
         if(a%i==0 && b%i==0){
             
             console.log(i);
         }
     }
 }

});