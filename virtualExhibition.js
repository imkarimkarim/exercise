const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const k = parseInt(line);
  const column = "########.......########";
  const corridor = ".......";
  const ghorfe = "ghorfe";
  for (let i = 0; i < 9; i++) {
    if (i === 8) {
      console.log("#######################");
    } else if (i % 2 === 0) {
      console.log(column);
    } else {
      let tmpTxt = "#";
      for (let i2 = 0; i2 < 2; i2++) {
        if (i2 === 1) tmpTxt += corridor;
        if (k >= i + i2) {
          tmpTxt += ghorfe + (i + i2).toString();
        } else {
          tmpTxt += corridor;
        }
      }
      tmpTxt += "#";
      console.log(tmpTxt);
    }
  }
});
