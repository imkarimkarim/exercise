const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const countAndOrgnize = (numbers) => {
  let orgNumbers = {};

  for (let i = 0; i < numbers.length; i++) {
    let tmp = numbers[i];

    if (orgNumbers[tmp]) {
      let tmpCount = orgNumbers[tmp].count;
      orgNumbers[tmp] = { number: tmp, count: tmpCount + 1 };
    } else {
      orgNumbers[tmp] = { number: tmp, count: 1 };
    }

  }
  return orgNumbers;
};

const combineNumbers = (numbers) => {
  const on = numbers;
  let firstPart = "";
  for (const key in on) {
    firstPart += key;
  }
  let secondPart = "";
  for (const key in on) {
    if (on[key].count > 1) {
      secondPart += on[key].count.toString();
    }
  }
  return firstPart + secondPart;
};

const sort = (resault) => {
  resault = resault.split("");
  return resault.sort().toString().replaceAll(",", "");
};

rl.on("line", function (input) {
  let flag = false;
  let resault = input;
  let prevResault = input;
  while (!flag) {
    resault = sort(combineNumbers(countAndOrgnize(resault)));
    if (resault === prevResault) {
      flag = true;
      console.log(resault);
    }
    prevResault = resault;
  }

  rl.close();
});
