const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin});
    const userInput = [];
    inp.on("line", (data) => {
        userInput.push(data);
        
    });
    inp.on("close", () => {
        var sp= userInput[0];        // we get input as array from user and we select the first element of that array 
        var ni=[];                   // creating new array named ni
        if(sp==0){                   // checking whether the given input is 0 or not
            console.log("NULL");     // if 0 then null will be printed
        }
        else                         // else 9 table will be printed till the given input number
        {
        for(var i=1;i<=sp;i++)       // for loop to print the 9 tables loop will execute till the input number we gave 
        {
            var s= +i * 9;
            ni.push(s);              // in every iteration the s value will be pushed to ni array 
          
        }
        }
        console.log(ni.join(" "));   // join is used to print the ni array value with the space or(" ") what we give inside the double colon
        });
