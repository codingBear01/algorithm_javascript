const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

solution(input);

function solution(nums) {
  for (let i = 1; i <= N; i++) {
    const numArr = input[i].split(" ").map((val) => +val);

    let A = numArr[0];
    let B = numArr[1];

    console.log(A + B);
  }
}
