const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testNum = input.length;
const testNumArr = input.map((val) => +val);

solution(testNum, testNumArr);

function solution(N, numArr) {
  let max = numArr[0];
  let maxIdx = numArr.indexOf(max);

  for (let i = 0; i < N; i++) {
    if (max < numArr[i]) {
      max = numArr[i];
      maxIdx = i;
    }
  }

  console.log(max);
  console.log(maxIdx + 1);
}
