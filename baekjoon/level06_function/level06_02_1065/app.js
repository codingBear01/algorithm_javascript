const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(+input);

function hansu(num) {
  const strNum = String(num);
  // 한수는 3자리수부터 따지면 되므로 2자리수 이하는 return true
  if (strNum.length <= 2) {
    return true;
  }

  const diff = +strNum[1] - +strNum[0];
  let beforeNum = +strNum[1];

  for (let i = 2; i < strNum.length; i++) {
    if (strNum[i] - beforeNum !== diff) {
      return false;
    }
    beforeNum = +strNum[i];
  }
  return true;
}

function solution(N) {
  let cnt = 0;
  for (let i = 1; i <= N; i++) {
    if (hansu(i)) {
      cnt++;
    }
  }
  console.log(cnt);
}
