//https://quera.ir/problemset/contest/10163/

const inOutTime = [[15,30], [25,50], [70,80]];
const a = 10;
const b = 8;
const c = 6;

// check for time conflict
let timeConflict = false;
for(let i = 0; i < inOutTime.length; i++){
	if(inOutTime[i][0] > inOutTime[i][1]){
		timeConflict = true;
		break;
	}
}

// finding brakpoint
let breakPoints = []
if(timeConflict){
	console.log("you have time conflict")
}
else{
	let ii = 0;
	for(let i = 0; i < inOutTime.length; i++){
		while(ii < 2){			
			if(!(breakPoints.includes(inOutTime[i][ii]))){
			breakPoints.push(inOutTime[i][ii]);			
			}
			ii++;
		}
		ii = 0;
	}
	breakPoints.sort((a, b) => {return a -b});
}

// calculating times(how many and what time)
let peasEaters = {
	'1eater': [],
	'2eater': [],
	'3eater': [],
}
let counter = 0;
for(let i = 0; i < breakPoints.length; i++){
	for(let ii = 0; ii < inOutTime.length; ii++){
		if(breakPoints[i] >= inOutTime[ii][0] && breakPoints[i+1] <= inOutTime[ii][1]){
			counter++;
		}
	}
	if(counter == 1){
		peasEaters["1eater"].push(breakPoints[i]);
		peasEaters["1eater"].push(breakPoints[i+1]);
	}
	if(counter == 2){
		peasEaters["2eater"].push(breakPoints[i]);
		peasEaters["2eater"].push(breakPoints[i+1]);
	}
	if(counter == 3){
		peasEaters["3eater"].push(breakPoints[i]);
		peasEaters["3eater"].push(breakPoints[i+1]);
	}
	counter = 0;
}

// calculate the money "slarakhan" should pay
let money = 0;

const e1 = peasEaters["1eater"];
let i = e1.length-1;
let sum = 0;
while(i > 0){	
	sum +=  e1[i] - e1[i-1];
	i = i-2;
}
money += sum * a * 1;

const e2 = peasEaters["2eater"];
i = e2.length-1;
sum = 0;
while(i > 0){	
	sum +=  e2[i] - e2[i-1];
	i = i-2;
}
money += sum * b * 2;

const e3 = peasEaters["3eater"];
i = e3.length-1;
sum = 0;
while(i > 0){	
	sum +=  e3[i] - e3[i-1];
	i = i-2;
}
money += sum * c * 3;

return money;
