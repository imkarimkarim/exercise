const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.on('line', (line) =>{
	let [a, b, l] = line.split(' ');
	a = parseInt(a)
	b = parseInt(b)
	l = parseInt(l)
	
	let i = 0;
	let aIsNext = true;
	let minutes = 0;

	while(i < l){
		if(aIsNext){
		minutes += a
		aIsNext = false
		}
		else{
			minutes += b;
			aIsNext = true
		}
		i++
	}
	console.log(minutes)
	rl.close()
})