const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

let countReadLine = 0;
let i;
let d;
let dataBase = {}
let tmpDay;
let tmpNames = [];
let tmpAllName = [];
let countNewName = 0;
let countLastName = 0;
let flag = false;

rl.on("line", (line) =>{
    if(countReadLine == 0){
        [i, d] = line.split(" ");
        for(let i2 = 0; i2 < d; i2++){
            let tmp = "day" + (i2+1).toString();
            dataBase[tmp] = [];
        }
    }
    else{
        if(countReadLine - 1 <= i){
            tmpDay = parseInt(line.split("|")[0].split(" ")[2]);
            let tmpTime = line.split("|")[1].split(" ")[2].split(":");
            let tmpName = line.split("|")[2].split(" ")[2];
            // dataBase["day" + line[tmpDay]].push([{time: tmpTime, name: tmpName}])
            let day = "day" + tmpDay.toString();
            dataBase[day].push({time: tmpTime, name: tmpName})
            // console.log(tmpDay, tmpTime, tmpName)
        }
    }
    if(countReadLine == i){
        for(let i2 = 0; i2 < d; i2++){
            tmpDay = dataBase["day" + (i2+1).toString()];
            tmpNames = []
            for(let i3 = 0; i3 < tmpDay.length; i3++){
                if(tmpNames.indexOf(tmpDay[i3].name) == -1){
                    tmpNames.push(tmpDay[i3].name);                
                }
                if(tmpAllName.indexOf(tmpDay[i3].name) == -1){
                    tmpAllName.push(tmpDay[i3].name);
                    countNewName++;
                }
                countLastName = 0;
                flag == false;
                for(let i4 = i2; i4 < d ;i4++){
                    tmpDay2 = dataBase["day" + (i4+1).toString()]
                    for(let i5 = i3; i5 < tmpDay2.length; i5++){
                        if(tmpDay[i3].name == tmpDay2[i5].name){
                            flag = true;
                        }
                    }
                }
                if(flag == false){
                    countLastName++;
                }
            }            
            console.log(tmpNames.length + " " + countNewName + " " + countLastName)
            countNewName = 0;
        }
        rl.close()
    }
    countReadLine++;
})