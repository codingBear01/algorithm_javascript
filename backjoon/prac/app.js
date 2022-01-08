// "/dev/stdin"

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const num = +input[0];
const arr = input[1].split(" ").map((val) => +val);

// arr.sort((a, b) => a - b);
// console.log(arr[0], arr[num - 1]);

let min = arr[0];
let max = arr[0];

for (let i = 0; i < num; i++) {
  console.log(arr[i]);

  if (min > arr[i]) {
    min = arr[i];
  }

  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(min, max);
