const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let ans = "";

solution(input);

function solution(nums) {
  for (let i = 1; i <= N; i++) {
    const numArr = nums[i].split(" ").map((val) => +val);
    ans += numArr[0] + numArr[1] + "\n";
  }
  console.log(ans);
}
