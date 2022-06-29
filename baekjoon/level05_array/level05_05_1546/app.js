const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testNum = +input[0];
const testNumArr = input[1].split(" ").map((val) => +val);

solution(testNum, testNumArr);

function solution(N, numArr) {
  let M = 0;
  let result = "";
  let sum = 0;

  for (let i = 0; i < N; i++) {
    if (M < numArr[i]) {
      M = numArr[i];
    }
  }

  for (let i = 0; i < N; i++) {
    result = (numArr[i] / M) * 100;
    sum += result;
  }
  console.log(sum / N);
}
