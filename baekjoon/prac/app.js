const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[1].split(" ").map((val) => +val);
let ans = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    continue;
  } else {
    let cnt = 0;

    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        cnt++;
      }
    }
    if (cnt === 0) {
      ans++;
    }
  }
}
console.log(ans);

// arr[i] / 1000>= 나눴을 때
// 나머지 0 되는 게 2개이면? true(소수)
// 아니면? X
