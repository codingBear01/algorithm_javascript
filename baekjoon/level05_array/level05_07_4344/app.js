const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testNum = +input[0];
const testNumArr = input.slice(1);

solution(testNum, testNumArr);

function solution(C, numArr) {
  for (let i = 0; i < C; i++) {
    let gradeLine = numArr[i].split(" ").map((val) => +val);
    let N = +gradeLine[0];
    let gradeTotal = 0;

    for (let j = 1; j <= N; j++) {
      gradeTotal += gradeLine[j];
    }

    let gradeAvg = gradeTotal / N;
    let overAvgCnt = 0;

    for (let k = 1; k <= N; k++) {
      if (gradeLine[k] > gradeAvg) {
        overAvgCnt++;
      }
    }

    let result = ((overAvgCnt / N) * 100).toFixed(3);

    console.log(`${result}%`);
  }
}
