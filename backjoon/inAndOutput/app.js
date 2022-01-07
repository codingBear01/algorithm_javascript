// 2000
// "/dev/stdin"

const fs = require("fs");
const A = fs.readFileSync("./input.txt").toString().split(" ");

if ((A % 4 == 0 && A % 100 != 0) || A % 400 == 0) {
  console.log(1);
} else {
  console.log(0);
}
