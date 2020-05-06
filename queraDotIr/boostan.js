const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})


let count = 0;
let x, x1;
rl.on("line", (line) =>{
    let tmp = line.split(" ");
    if(count == 0){
        x = parseInt(tmp[0]);
        count++;
    }
    else{
        x1 = parseInt(tmp[0]);        
        if(x > x1){
            console.log("Left");
            rl.close();
        }
        if(x < x1){
            console.log("Right");
            rl.close();
        }
    }
})