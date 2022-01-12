const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
X = +input;

let groupCounter = 0;
let ascendingNumArr = [];
let descendingNumArr = [];

while (X > 0) {
  groupCounter++;
  X = X - groupCounter;
}

for (let i = 0; i < groupCounter; i++) {
  ascendingNumArr.push(i + 1);
  descendingNumArr.push(groupCounter - i);
}

if (groupCounter % 2 === 0) {
  console.log(
    `${ascendingNumArr[groupCounter - 1 + X]}/${
      descendingNumArr[groupCounter - 1 + X]
    }`
  );
} else {
  console.log(
    `${descendingNumArr[groupCounter - 1 + X]}/${
      ascendingNumArr[groupCounter - 1 + X]
    }`
  );
}
