// "/dev/stdin"
// 3
// 1+2+3

let input = require("fs").readFileSync("./input.txt").toString().trim();
input = +input;

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}

console.log(answer);
