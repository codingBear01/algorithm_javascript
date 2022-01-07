// "/dev/stdin"

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split(" ")
  .map((val) => +val);

let num = input;

for (let i = 1; i < 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
