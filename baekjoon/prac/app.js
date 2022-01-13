const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

let a = input[0];
let b = input[1];
let arr = [];
let answer = "";
for (let i = 0; i <= b; i++) {
  arr.push(true);
}
arr[0] = false;
arr[1] = false;

console.log(arr);

for (let m = 2; m <= b; m++) {
  if (arr[m]) {
    for (let n = 2; n <= b / m; n++) {
      arr[m * n] = false;
    }
  }
}
for (let j = a; j <= b; j++) {
  if (arr[j]) answer += j + "\n";
}
console.log(answer.trim());
