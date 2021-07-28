const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin});
    const userInput = [];
    inp.on("line", (data) => {
        userInput.push(data);
        
    });
    inp.on("close", () => {
        var sp= userInput[0];
        var fac=1;
        if (sp===0)
        {
            console.log("1")
        }
        else{
            
             for( var i=1; i<=sp;i++){
               fac= +i * fac;
             }
        console.log(fac);
        }
        });