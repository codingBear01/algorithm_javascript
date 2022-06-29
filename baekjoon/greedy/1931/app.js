const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const list = [];

for (let i = 0; i < input.length; i++) {
  list.push(input[i].split(' ').map((val) => +val));
}

function solution(n, list) {
  let ans = 1;

  list.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let curEndTime = list[0][1];

  for (let i = 1; i < n; i++) {
    const [start, end] = list[i];

    if (start >= curEndTime) {
      curEndTime = end;
      ans++;
    }
  }
  console.log(ans);
}

solution(n, list);
