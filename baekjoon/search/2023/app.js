const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const n = +input;

DFS(2, 1);
DFS(3, 1);
DFS(5, 1);
DFS(7, 1);

function DFS(number, jarisu) {
  if (jarisu === n) {
    if (isPrime(number)) {
      console.log(number);
    }
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    if (isPrime(number * 10 + i)) {
      DFS(number * 10 + i, jarisu + 1);
    }
  }
}

function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
