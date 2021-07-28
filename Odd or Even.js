const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin});
    const userInput = [];
    inp.on("line", (data) => {
        userInput.push(data);
        
    });
    inp.on("close", () => {
        var sp= userInput[0];
        if(sp==0){
            console.log("Zero");
        }
        else if(sp%2==0){
            console.log("Even");
        }
        else{
            console.log("Odd");
        }
        });