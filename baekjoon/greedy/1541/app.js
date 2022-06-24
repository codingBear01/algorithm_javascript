const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const str = input.split('-');

solution(str);

function solution(str) {
  let ans = 0;

  for (let i = 0; i < str.length; i++) {
    const tmp = retPlusSum(str[i]);

    if (i === 0) ans += tmp;
    else ans -= tmp;
  }
  console.log(ans);
}

function retPlusSum(str) {
  let sum = 0;
  const tmp = str.split('+');

  for (let i = 0; i < tmp.length; i++) {
    sum += +tmp[i];
  }

  return sum;
}
