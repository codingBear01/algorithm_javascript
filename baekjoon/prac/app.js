const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((val) => +val);

const primeNumArr = [];
let primeNumSum = 0;

function primeNumber(n) {
  if (n < 2) {
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }
  primeNumArr.push(n);
  primeNumSum += n;
}

const begin = parseInt(input.shift());
const end = parseInt(input.shift());

for (let i = begin; i <= end; i++) {
  primeNumber(i);
}

if (!primeNumArr.length) {
  console.log(-1);
} else {
  console.log(primeNumSum);
  console.log(Math.min.apply(null, primeNumArr));
}
