const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const convertStringToMinutes = (str) => {
  const tmp = str.split(":");
  return parseInt(tmp[0]) * 60 + parseInt(tmp[1]);
};

const lineToObject = (line) => {
  if (line.split(" ")[3]) {
    return {
      action: line.split(" ")[0],
      amount: parseInt(line.split(" ")[1]),
      time: line.split(" ")[2],
      status: line.split(" ")[3],
    };
  }
  return {
    action: line.split(" ")[0],
    amount: parseInt(line.split(" ")[1]),
    time: line.split(" ")[2],
  };
};

let lineCount = 0;
let recordsLength;
const records = [];
let stock = 0;
let lowestStock = 0;
let DOROGHE = false;

rl.on("line", (line) => {
  if (lineCount === 0) {
    recordsLength = parseInt(line);
  } else {
    records.push(lineToObject(line));
    if (lineCount === recordsLength) {
      // sort by time
      records.sort((a, b) => {
        return convertStringToMinutes(a.time) - convertStringToMinutes(b.time);
      });

      for (let i = 0; i < records.length; i++) {
        switch (records[i].action) {
          case "DEP":
            if (records[i].amount > 0) {
              stock += records[i].amount;
            }
            break;
          case "WIT":
            if (records[i].status === "OK") {
              stock -= records[i].amount;
              if (stock < lowestStock) lowestStock = stock;
            } else if (records[i].status === "FAIL") {
              if (records[i].amount <= stock) {
                DOROGHE = true;
              }
              for (let i2 = i + 1; i2 < recordsLength; i2++) {
                let tmp_recordsLength;
                const tmp_records = [];
                let tmp_stock = 0;
                let tmp_lowestStock = 0;
                switch (records[i2].action) {
                  case "DEP":
                    if (records[i2].amount > 0) {
                      tmp_stock += records[i2].amount;
                    }
                    break;
                  case "WIT":
                    if (records[i2].status === "OK") {
                      tmp_stock -= records[i2].amount;
                      if (tmp_stock < tmp_lowestStock)
                        tmp_lowestStock = tmp_stock;
                      if (tmp_lowestStock * -1 >= records[i].amount) {
                        DOROGHE = true;
                      }
                    }
                }
              }
            }
            break;
          default:
        }
      }
      if (DOROGHE) {
        console.log("DOROGHE");
      } else {
        if (lowestStock === 0) {
          console.log(0);
        } else {
          console.log(lowestStock * -1);
        }
      }

      rl.close();
    }
  }
  lineCount++;
});
