// "/dev/stdin"

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let num = +input[0];

for (let i = 1; i <= num; i++) {
  let arr = input[i].split(" ").map((val) => +val);
  let studentNum = arr[0];
  let sum = 0;

  for (let j = 1; j <= studentNum; j++) {
    sum += arr[j];
  }
  let avg = sum / studentNum;

  let count = 0;

  for (let k = 1; k <= studentNum; k++) {
    if (arr[k] > avg) {
      count++;
    }
  }
  result = ((count / studentNum) * 100).toFixed(3);
  console.log(`${result}%`);
}
