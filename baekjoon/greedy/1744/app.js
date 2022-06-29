const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((val) => +val);

const [n, ...list] = input;

function solution(n, list) {
  const minusArr = [];
  const plusArr = [];
  let zeroCnt = 0;
  let oneCnt = 0;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (list[i] === 0) {
      zeroCnt++;
    } else if (list[i] === 1) {
      oneCnt++;
    } else if (list[i] < 0) {
      minusArr.push(list[i]);
    } else {
      plusArr.push(list[i]);
    }
  }

  const sortedMinus = minusArr.sort((a, b) => b - a);
  const sortedPlus = plusArr.sort((a, b) => a - b);

  while (sortedPlus.length > 1) {
    const first = sortedPlus.pop();
    const second = sortedPlus.pop();

    ans += first * second;
  }

  if (sortedPlus.length % 2 === 1) {
    ans += sortedPlus.pop();
  }

  while (sortedMinus.length > 1) {
    const first = sortedMinus.pop();
    const second = sortedMinus.pop();

    ans += first * second;
  }

  if (sortedMinus.length % 2 === 1 && zeroCnt === 0) {
    ans += sortedMinus.pop();
  }

  ans += oneCnt;

  console.log(ans);
}

solution(n, list);
