const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

const A = input[0];
const B = input[1];
const V = input[2];

console.log(Math.ceil(V - B / (A - B)));
