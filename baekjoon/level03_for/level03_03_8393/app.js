const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const num = +input;

solution(num);

function solution(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  console.log(sum);
}
