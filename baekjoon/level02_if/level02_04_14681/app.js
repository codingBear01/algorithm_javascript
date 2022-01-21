const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = +input;

function solution(num) {
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}

solution(input);
