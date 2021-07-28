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
    var b=[];
    var c=[];
    for(i=0;i<a.length;i++){
        if(a[i]%2==0){
            b.push(a[i]);
        }
        else{
            c.push(a[i]);
        }
    }
    
    b.sort();
    c.sort();
    console.log(b.join(" "));
    console.log(c.join(" "));

});