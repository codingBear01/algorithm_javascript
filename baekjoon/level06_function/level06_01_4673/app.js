const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution();

// 생성자 출력
function d(num) {
  let sum = 0;
  const strNum = String(num);
  for (let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
  }
  return num + sum;
}

function solution() {
  const arr = Array(10000).fill(0);

  // 생성자 있으면 카운트 올리기
  for (let i = 1; i <= 10000; i++) {
    const ans = d(i);
    if (ans <= 10000) {
      arr[ans]++;
    }
  }

  // selfNum 출력
  for (let i = 1; i <= 10000; i++) {
    if (arr[i] === 0) {
      console.log(i);
    }
  }
}
