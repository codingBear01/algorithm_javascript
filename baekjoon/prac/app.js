const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0].split(" ").shift();
const M = +input[0].split(" ").pop();
const numArr = input[1].split(" ");
let max = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = +numArr[i] + +numArr[j] + +numArr[k];
      if (sum > max && sum <= M) {
        max = sum;
      }
    }
  }
}
console.log(max);
