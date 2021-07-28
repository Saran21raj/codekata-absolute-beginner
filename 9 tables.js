const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin});
    const userInput = [];
    inp.on("line", (data) => {
        userInput.push(data);
        
    });
    inp.on("close", () => {
        var sp= userInput[0];
        var ni=[];
        if(sp==0){
            console.log("NULL");
        }
        else
        {
        for(var i=1;i<=sp;i++)
        {
            var s= +i * 9;
            ni.push(s);
          
        }
        }
        console.log(ni.join(" "));
        });