const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let A = input[0];
let B = input[1];

function solution(num1, num2) {
  const num2H = num2[0];
  const num2T = num2[1];
  const num2O = num2[2];

  console.log(num1 * num2O);
  console.log(num1 * num2T);
  console.log(num1 * num2H);
  console.log(num1 * num2);
}

solution(A, B);
