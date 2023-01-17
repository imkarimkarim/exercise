const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let countLine = 0;
let inputs = [];

rl.on("line", (line) => {
  countLine++;
  inputs.push(line.split(" "));

  if (countLine === 2) {
    const L1 = inputs[0][0],
      R1 = inputs[0][1],
      L2 = inputs[1][0],
      R2 = inputs[1][1];
    if (L1 === R1 || L1 === R2 || R1 === L2 || L2 === R2) console.log("YES");
    else console.log("NO");
    rl.close();
  }
});
