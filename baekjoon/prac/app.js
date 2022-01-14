const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

const [x, y, w, h] = input;
const xDiff = w - x;
const yDiff = h - y;

const arr = [xDiff, yDiff, x, y];
arr.sort((a, b) => {
  return a - b;
});

console.log(arr[0]);
