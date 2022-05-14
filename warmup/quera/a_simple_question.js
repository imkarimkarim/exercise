const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  let tmp = line.split(" ");
  let num = parseInt(tmp[0]);
  for(let i = 0; i < num; i++) {
    console.log('man khoshghalb hastam');
  }
  rl.close();
});
