// "/dev/stdin"

let input = require("fs").readFileSync("./input.txt").toString().trim();
input = +input;

let answer = "";

for (let i = input; i >= 1; i--) {
  answer += i + "\n";
}

console.log(answer);
