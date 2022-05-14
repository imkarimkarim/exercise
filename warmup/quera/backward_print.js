const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let memmory = [];
rl.on("line", function (line) {
  if (line === "0") {
    for (let i = memmory.length - 1; i >= 0; i--) {
      console.log(memmory[i]);
    }
    rl.close();
  } else {
    memmory.push(line);
  }
});
