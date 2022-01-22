const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +input;
let star = "";
let space = "";

solution(num);

function solution(N) {
  for (let i = 1; i <= N; i++) {
    star += "*";
    for (let j = N - i; j > 0; j--) {
      space += " ";
    }
    console.log(space + star);
    space = "";
  }
}

// ----- 라매개발자 ver.
// function solution(N) {
//   for (let line = 1; line <= N; line++) {
//     const starCnt = line;
//     const spaceCnt = N - line;
//     let printString = "";
//     for (let i = 0; i < spaceCnt; i++) {
//       printString += " ";
//     }
//     for (let i = 0; i < starCnt; i++) {
//       printString += "*";
//     }
//     console.log(printString);
//   }
// }
