const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input.shift());
for (let k = 0; k < T; k++) {
  const arr = [];
  const HWN = input[k].split(" ");
  const H = Number(HWN[0]); //층
  const W = Number(HWN[1]); //방
  const N = Number(HWN[2]); //손님

  for (let i = 1; i <= W; i++) {
    for (let j = 1; j <= H; j++) {
      if (i < 10) {
        arr.push(j + "0" + i);
      } else {
        arr.push(`${j}${i}`);
      }
    }
  }
  console.log(arr[N - 1]);
}
