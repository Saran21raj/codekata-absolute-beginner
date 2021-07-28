const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin});
    const userInput = [];
    inp.on("line", (data) => {
        userInput.push(data);
        
    });
    inp.on("close", () => {
        var sp= userInput[0].split(" ");
        var sum=[];
        for(var i=1;i<=3;i++){
        
        sum.push(userInput[0]*i);  
        
        }
        console.log(sum.join(" "));    
        });