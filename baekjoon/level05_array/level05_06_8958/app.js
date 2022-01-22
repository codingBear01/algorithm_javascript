const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testNum = +input[0];

solution(testNum, input);

function solution(N, OXArr) {
  for (let i = 1; i <= N; i++) {
    let cnt = 0;
    let sum = 0;

    for (let j = 0; j < OXArr[i].length; j++) {
      if (OXArr[i][j] === "O") {
        cnt++;
      } else {
        cnt = 0;
      }
      sum += cnt;
    }
    console.log(sum);
  }
}

/* ----- 라매 개발자 ver.

const arrLength = +input[0];
const items = input.slice(1);

solution(arrLength, items);

function solution(N, OXArr) {
  for (let i = 0; i < N; i++) {
    const OXLine = OXArr[i];
    let cnt = 0;
    let score = 0;
    for (let j = 0; j < OXLine.length; j++) {
      if (OXLine[j] === "O") {
        cnt++;
        score += cnt;
      } else {
        cnt = 0;
      }
    }
    console.log(score);
  }
}*/
