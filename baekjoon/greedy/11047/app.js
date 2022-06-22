// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n');

// const temp = input[0].split(' ').map((val) => +val);
// const n = temp[0];
// const k = temp[1];
// const a = [];

// for (let i = 1; i < n; i++) {
//   a.push(+input[i]);
// }

// function solution(coinCnt, total, numArr) {
//   let cnt = 0;

//   for (let i = coinCnt - 1; i >= 0; i--) {
//     if (total / numArr[i] > 1) {
//       cnt += parseInt(total / numArr[i]);
//       total = total % numArr[i];
//     }
//     if (total === 0) break;
//   }
//   console.log(cnt);
// }

// solution(n, k, a);

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

// 문제 풀이
input[0] = input[0].split(' ');
const n = +input[0][0];
const k = +input[0][1];

// 가치가 큰 동전부터 나오도록 뒤집어줌
const coins = input
  .filter((v, i) => i > 0)
  .map((v) => +v)
  .reverse();

// greedy
let count = 0;
let total = k;
for (const coin of coins) {
  if (coin <= total) {
    count += Math.floor(total / coin);
    total %= coin;
  }
}

console.log(count);
