const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let period = []
let countInput = 0;
let countTeachers;
rl.on('line', (line) =>{
    countInput++;
    if(countInput == 1) {
        countTeachers = parseInt(line);
    }
    else{
        period[countInput - 2] = parseInt(line)
    }
    if(countInput == countTeachers + 1) {
        period.sort((a, b) => a - b)
        let tiggerDay = period[period.length-1] * period[period.length-2] + 1
        let afterXMoth = Math.floor(tiggerDay/30) * 30
        console.log(tiggerDay - afterXMoth)
        rl.close()
    }
})