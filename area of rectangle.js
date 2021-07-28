const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin});
    const userInput = [];
    inp.on("line", (data) => {
        userInput.push(data);
        
    });
    inp.on("close", () => {
        var sp= userInput[0].split(" ");
        var c= +sp[0] * +sp[1];
        console.log(+c.toFixed(1));
        });