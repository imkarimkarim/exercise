const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const one = 1;
let arr = []
let prevArr = []
let i = 1;
let i2 = 1;
let tmpText = ""

rl.on("line", (line) =>{
    line = parseInt(line)
    while(i <= line){
        arr = []

        while(i2 <= i){
            if(i2 == 1 || i2 == i){
                arr.push(one)
            }
            else{
                arr.push(prevArr[i2-2] + prevArr[i2-1])
            }
            
            i2++;
        }

        i2 = 1;
        for(let i3 = 0; i3 < arr.length; i3++){
            tmpText += arr[i3] + " ";
        }
        tmpText = tmpText.slice(0, tmpText.length-1)
        console.log(tmpText)
        tmpText = ""
        prevArr = arr
        i++;
    }
    rl.close();
})