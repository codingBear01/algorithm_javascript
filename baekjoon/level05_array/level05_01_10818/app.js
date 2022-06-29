const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testNum = +input[0];
const testNumArr = input[1].split(" ").map((val) => +val);

solution(testNum, testNumArr);

function solution(N, numArr) {
  let max = numArr[0];
  let min = numArr[0];

  for (let i = 0; i < N; i++) {
    if (max < numArr[i]) {
      max = numArr[i];
    } else if (min > numArr[i]) {
      min = numArr[i];
    }
  }

  console.log(min, max);
}
