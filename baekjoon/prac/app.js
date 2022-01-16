const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input.shift();
let arr = [];

for (let i = 0; i < N; i++) {
  arr.push(+input[i]);
}
arr.sort((a, b) => a - b);
console.log(arr.join("\n"));
