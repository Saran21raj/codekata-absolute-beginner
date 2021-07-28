const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin});
    const userInput = [];
    inp.on("line", (data) => {
        userInput.push(data);
        
    });
    inp.on("close", () => {
        let a=userInput[0];
         if(a<0){
            console.log("Error");
        }
        else{
        let circumference= 2 * Math.PI * +a;
        console.log(circumference.toFixed(2));
        }
            
        });