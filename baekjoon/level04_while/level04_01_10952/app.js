const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testNumArr = [];
for (let i = 0; i < input.length; i++) {
  const testNums = input[i].split(" ").map((val) => +val);
  testNumArr.push(testNums);
}

solution(testNumArr);

function solution(numArr) {
  let A = numArr[0][0];
  let B = numArr[0][1];
  let i = 0;

  while (i < numArr.length) {
    A = numArr[i][0];
    B = numArr[i][1];

    if (A === 0 || B === 0) {
      break;
    } else {
      i++;
    }

    console.log(A + B);
  }
}

/*
let i = 0;
let result = "";

while (i <= input.length - 1) {
  let a = +input[i].split(" ")[0];
  let b = +input[i].split(" ")[1];

  if (a != 0 || b != 0) {
    result += `${a + b}` + "\n";
  } else {
    break;
  }
  i++;
}

console.log(result);*/
