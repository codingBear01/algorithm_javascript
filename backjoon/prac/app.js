// "/dev/stdin"
// 5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2

const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
input = input.split("\n");

const testNum = +input[0];
for (let i = 1; i <= testNum; i++) {
  const arr = input[i].split(" ").map((val) => +val);
  console.log(arr[0] + arr[1]);
}
