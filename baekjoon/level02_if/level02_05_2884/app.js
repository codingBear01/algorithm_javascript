const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

const numA = input[0];
const numB = input[1];

// function solution(H, M) {
//   M -= 45;

//   if (M < 0) {
//     M += 60;
//     H -= 1;
//   }
//   if (H < 0) {
//     H += 24;
//   }
//   console.log(H, M);
// }

function solution(H, M) {
  if (M - 45 > 0) {
    console.log(`${H} ${M - 45}`);
  } else if (M - 45 < 0 && H - 1 > 0) {
    console.log(`${H - 1} ${M - 45 + 60}`);
  } else if (M - 45 < 0 && H - 1 < 0) {
    console.log(`${H - 1 + 24} ${M - 45 + 60}`);
  }
}

solution(numA, numB);
