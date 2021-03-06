// 문제
// 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.

// 출력
// N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.

// 예제 입력 1
// 72
// 예제 출력 1
// 2
// 2
// 2
// 3
// 3
// 예제 입력 2
// 3
// 예제 출력 2
// 3
// 예제 입력 3
// 6
// 예제 출력 3
// 2
// 3
// 예제 입력 4
// 2
// 예제 출력 4
// 2
// 예제 입력 5
// 9991
// 예제 출력 5
// 97
// 103

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
