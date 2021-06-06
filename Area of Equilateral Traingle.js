const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin});
    const userInput = [];
    inp.on("line", (data) => {
        userInput.push(data);
        
    });
    inp.on("close", () => {
        //start-here
        var a= Math.sqrt(3)/ 4;
        var b= userInput[0];
        var c= +b * +b;
        var d= +a * +c;
        console.log(d.toFixed(2));
        //end-here
        });