const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testNum = +input[0];
const testArr = input.slice(1);

solution(testNum, testArr);

function solution(T, caseArr) {
  let res = "";

  for (let i = 0; i < T; i++) {
    const arr = caseArr[i].split(" ");
    const R = +arr[0];
    const S = arr[1];

    for (let j = 0; j < S.length; j++) {
      for (let k = 1; k <= R; k++) {
        res += S[j];
      }
    }
    res += "\n";
  }
  console.log(res);
}

/* ----- 출력초과
const testNum = +input[0];
const testArr = input.slice(1);

solution(testNum, testArr);

function solution(T, caseArr) {
  let resArr = [];

  for (let i = 0; i < T; i++) {
    const arr = caseArr[i].split(" ");
    const R = +arr[0];
    const S = arr[1];

    for (let j = 0; j < S.length; j++) {
      for (let k = 1; k <= R; k++) {
        resArr.push(S[j]);
      }
    }
    console.log(resArr.join(""));
  }
}*/
