const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin});
    const userInput = [];
    inp.on("line", (data) => {
        userInput.push(data);
        
    });
    inp.on("close", () => {
        let series= userInput[0];
        let arr=[];
       
        if(series<0){
            console.log("Error");
        }
        else if(series==0){
            console.log("0")
        }
        else
        {
             for(let i=1;i<=series;i++){
            arr.push(+i * +i);
        }
        console.log(arr[+series-1]);
        }
        });