const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

function solution(num) {
  const A = num[0];
  const B = num[1];

  if (A > B) {
    console.log(">");
  } else if (A < B) {
    console.log("<");
  } else {
    console.log("==");
  }
}

solution(input);
