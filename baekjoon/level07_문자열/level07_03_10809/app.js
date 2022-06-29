const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(str) {
  let ansArr = Array(26).fill(-1);

  for (let i = 0; i < str.length; i++) {
    let nowChar = str[i];
    let ansArrIdx = nowChar.charCodeAt() - 97;
    // 처음 등장한 문자만 arr에 저장(중복 제거)
    if (ansArr[ansArrIdx] === -1) {
      ansArr[ansArrIdx] = i;
    }
  }

  console.log(ansArr.join(" "));
}
