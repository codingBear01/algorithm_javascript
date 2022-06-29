const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testNumArr = input.map((val) => +val);

solution(testNumArr);

function solution(numArr) {
  const A = numArr[0];
  const B = numArr[1];
  const C = numArr[2];
  const result = String(A * B * C);

  for (let i = 0; i <= 9; i++) {
    let cnt = 0;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === String(i)) {
        cnt++;
      }
    }
    console.log(cnt);
  }
}
