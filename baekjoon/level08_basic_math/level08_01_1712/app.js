const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(input);

function solution(nums) {
  const A = +nums[0];
  const B = +nums[1];
  const C = +nums[2];
  const netProfit = C - B;

  if (netProfit <= 0) {
    console.log(-1);
  } else {
    console.log(Math.floor(A / netProfit) + 1);
  }
}
