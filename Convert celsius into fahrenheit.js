const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin});
    const userInput = [];
    inp.on("line", (data) => {
        userInput.push(data);
        
    });
    inp.on("close", () => {
        let cel= userInput[0];
        let a= (+cel* 1.8)+ 32;
        console.log(a.toFixed(2));
        });