//https://quera.ir/problemset/contest/10163/


const rl = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
});

const price = [];
const playerInOutTime = [];

rl.on("line", (line) =>{
	let tmp = line.split(" ");

	if(!price[0]){
		tmp.forEach(e => {
			price.push(parseInt(e));			
		});
	}
	else{
		if(tmp[0] < tmp[1]){
			playerInOutTime.push([parseInt(tmp[0]), parseInt(tmp[1])]);
			
			if(tmp[3] == " "){
				//calculate
				console.log(price)
				console.log(playerInOutTime)
				rl.close();
			}
		}
		else if(tmp[0] >= tmp[1]) console.error("first number should bigger than second.")
	}
})

// const inOutTime = [[15,30], [25,50], [70,80]];
// const a = 10;
// const b = 8;
// const c = 6;

// // const inOutTime = [[1,6], [3,5], [2,8]];
// // const a = 5;
// // const b = 3;
// // const c = 1;

// // check for time conflict
// let timeConflict = false;
// for(let i = 0; i < inOutTime.length; i++){
// 	if(inOutTime[i][0] > inOutTime[i][1]){
// 		timeConflict = true;
// 		break;
// 	}
// }

// // finding brakpoint
// let breakPoints = []
// if(timeConflict){
// 	return("you have time conflict")
// }
// else{
// 	let ii = 0;
// 	for(let i = 0; i < inOutTime.length; i++){
// 		while(ii < 2){			
// 			if(!(breakPoints.includes(inOutTime[i][ii]))){
// 			breakPoints.push(inOutTime[i][ii]);			
// 			}
// 			ii++;
// 		}
// 		ii = 0;
// 	}
// 	breakPoints.sort((a, b) => {return a -b});
// }

// // divide times(how many and what time)
// let peasEaters = [[], [], []];
// let counter = 0;
// for(let i = 0; i < breakPoints.length; i++){
// 	for(let ii = 0; ii < inOutTime.length; ii++){
// 		if(breakPoints[i] >= inOutTime[ii][0] && breakPoints[i+1] <= inOutTime[ii][1]){
// 			counter++;
// 		}
// 	}
// 	if(counter == 1){
// 		peasEaters[0].push(breakPoints[i]);
// 		peasEaters[0].push(breakPoints[i+1]);
// 	}
// 	if(counter == 2){
// 		peasEaters[1].push(breakPoints[i]);
// 		peasEaters[1].push(breakPoints[i+1]);
// 	}
// 	if(counter == 3){
// 		peasEaters[2].push(breakPoints[i]);
// 		peasEaters[2].push(breakPoints[i+1]);
// 	}
// 	counter = 0;
// }

// // calculate the money "slarakhan" should pay
// let sums = [[0], [0], [0]];
// for(let i = 0; i < peasEaters.length; i++){
// 	for(let ii = peasEaters[i].length-1; ii > 0; ii--){
// 		sums[i][0] += peasEaters[i][ii] - peasEaters[i][ii-1];
// 		// 2 step jump
// 		ii--;
// 	}
// }

// let money = (sums[0] * 1 * a) + (sums[1] * 2 * b) + (sums[2] * 3 * c);
// console.log(money);
// return money;