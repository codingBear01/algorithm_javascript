const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testNumArr = input.map((val) => +val);

solution(testNumArr);

// 내가 생각한 접근법. 주어진 배열 for 돌면서 42로 쭉 나누고 중복값을 제거한 결과값 배열에다 넣고 최종 배열의 길이 반환
function solution(numArr) {
  let arr = [];

  for (let i = 0; i < numArr.length; i++) {
    arr.push(numArr[i] % 42);
  }

  let result = Array.from(new Set(arr));
  console.log(result.length);
}

/* ----- 라매개발자 ver.

function solution(items) {
  const ans = Array(42).fill(0);

  for (let i = 0; i < items.length; i++) {
    const nowChar = +items[i] % 42;
    ans[nowChar]++;
  }

  let cnt = 0;
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] !== 0) {
      cnt++;
    }
  }
  console.log(cnt);
}*/
