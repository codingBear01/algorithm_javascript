const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +input;
let ans = "";
solution(num);

function solution(N) {
  for (let i = N; i > 0; i--) {
    ans += i + "\n";
  }
  console.log(ans);
}
