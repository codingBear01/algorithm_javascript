const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);

function solution(A) {
  for (let i = 1; i <= +A[0]; i++) {
    A[i] = A[i].split(" ").map((item) => +item);
    let n = 0;
    let distance = A[i][1] - A[i][0];
    let close = Math.floor(Math.sqrt(distance));
    let step = 2 * close - 1;
    let remain = distance - close * close;
    if (remain !== 0) {
      if (remain <= close) {
        step += 1;
      } else {
        step += 2;
      }
    }
    console.log(step);
  }
}
