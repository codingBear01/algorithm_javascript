const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0][0];
const k = +input[0][1];
const a = [];
for (let i = 1; i < input.length; i++) {
  a.push(+input[i]);
}

solution(n, k, a);

function solution(coinCnt, sum, numArr) {
  console.log('coinCnt:', coinCnt);
  console.log('sum:', sum);
  console.log('numArr:', numArr);
}
