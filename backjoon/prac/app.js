// "/dev/stdin"

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((val) => +val);

let max = Math.max.apply(null, input);
let maxIndex = input.indexOf(max);

console.log(max);
console.log(maxIndex + 1);
