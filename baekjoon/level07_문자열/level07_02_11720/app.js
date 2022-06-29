const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testNum = +input[0];
const testNumArr = input[1].split("").map((val) => +val);

solution(testNum, testNumArr);

function solution(N, numArr) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += numArr[i];
  }
  console.log(sum);
}
