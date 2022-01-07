// "/dev/stdin"
// 3
// 1+2+3

const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim();

testNum = +input;
let answer = 0;

for (let i = 1; i <= testNum; i++) {
  answer += i;
}

console.log(answer);
