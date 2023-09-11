const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("line", (line) =>{
    let count = parseInt(line);
    let i = 0;
    while(i < count){
        console.log("man khoshghlab hastam");
        i++;
    }
    if(i == count){
        rl.close();
    }
})