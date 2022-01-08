// "/dev/stdin"

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((val) => +val);

let max = input[0];
let maxIdx = 0;

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIdx = i;
  }
}

console.log(max);
console.log(maxIdx + 1);
