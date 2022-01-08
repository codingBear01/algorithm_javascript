// "/dev/stdin"

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((val) => +val);

let num = input;
let arr = [];

for (let i = 0; i < num.length; i++) {
  arr.push(num[i] % 42);
}

let result = Array.from(new Set(arr));
console.log(result.length);
