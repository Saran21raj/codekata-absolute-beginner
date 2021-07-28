const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin});
    const userInput = [];
    inp.on("line", (data) => {
        userInput.push(data);
        
    });
    inp.on("close", () => {
        let a=userInput[0];
        if(a%4==0){
            console.log("Y")
        }
        else{
            console.log("N")
        }
        });