// "/dev/stdin"
// 3
// 1+2+3

const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let max = +input[0];
let answer = "";

for (let i = 1; i <= max; i++) {
  let num = input[i].split(" ").map((val) => +val);
  answer += num[0] + num[1] + "\n";
}

console.log(answer);
