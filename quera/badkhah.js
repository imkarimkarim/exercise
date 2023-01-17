const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

let d, p = 0, mazrabD;
rl.on("line", (line) =>{
    let tmp = line.split(" ");
    p = parseInt(tmp[0])
    d = parseInt(tmp[1])
    
    mazrabD = d;
    while((mazrabD % p) > (p/2)){
        // console.log("mazrabD " + mazrabD);
        // console.log("p " + p)
        // console.log("mazrabD % p " + mazrabD % p)
        // console.log("p/2 " + p/2)
        mazrabD += d;
    }
    console.log(mazrabD)
})