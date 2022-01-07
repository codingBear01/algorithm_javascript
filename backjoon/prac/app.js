// "/dev/stdin"

let input = require("fs").readFileSync("./input.txt").toString().split("\n");

const testNum = +input[0];

for (let i = 1; i <= testNum; i++) {
  const arr = input[i].split(" ").map((val) => +val);

  let a = arr[0];
  let b = arr[1];

  console.log(`Case #${i}: ${a + b}`);
}
