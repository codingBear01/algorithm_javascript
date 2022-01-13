const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((val) => +val);

let number = Number(input);
let originNumber = number; // 원래수를 알기 위해 복사해둠
let primenumber = 2;
let smallFactorization = [];

while (true) {
  if (originNumber === 1) {
    // 원래 수가 1이면 반복문 탈출
    break;
  } else {
    if (number !== 1) {
      // number가 1이 아닐때까지
      if (number % primenumber === 0) {
        // 소인수분해 되었을 때
        smallFactorization.push(primenumber);
        number = number / primenumber;
      } else {
        primenumber++;
      }
    } else {
      // 나누어서 number가 1이 되면 반복문을 탈출한다.
      break;
    }
  }
}
if (smallFactorization.length !== 0) {
  console.log(smallFactorization.join("\n"));
}
