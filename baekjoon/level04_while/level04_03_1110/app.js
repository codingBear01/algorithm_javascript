const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let testNum = +input;

solution(testNum);

function solution(N) {
  let sum = "";
  let cnt = 0;

  while (true) {
    cnt++;

    sum = Math.floor(N / 10) + (N % 10);
    N = (N % 10) * 10 + (sum % 10);

    if (testNum === N) {
      break;
    }
  }
  console.log(cnt);
}
