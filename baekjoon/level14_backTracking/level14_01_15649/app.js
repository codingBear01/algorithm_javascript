const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let testN = +input[0];
let testM = +input[1];

solution(testN, testM);

function solution(N, M) {
  let ansLength = N * M;
  console.log(ansLength);
}
