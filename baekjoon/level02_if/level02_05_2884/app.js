const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

const numA = input[0];
const numB = input[1];

function solution(H, M) {
  M -= 45;

  if (M < 0) {
    M += 60;
    H -= 1;
  }
  if (H < 0) {
    H += 24;
  }
  console.log(H, M);
}

/*function solution(H, M) {
  if (M - 45 > 0) {
    console.log(`${H} ${M - 45}`);
  } else if (M - 45 < 0 && H - 1 > 0) {
    console.log(`${H - 1} ${M - 45 + 60}`);
  } else if (M - 45 < 0 && H - 1 < 0) {
    console.log(`${H - 1 + 24} ${M - 45 + 60}`);
  }
}*/ //아마도 문자 공백 문자 이런 식으로 출력되어서 오답 뜨는 듯? 그리고 코드도 너무 복잡해 항상 간결하게 작성하도록 유의해야겠다!

solution(numA, numB);
