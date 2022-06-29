const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(input);

function solution(str) {
  let wordCnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].length !== 0) {
      wordCnt++;
    }
  }
  console.log(wordCnt);
}
