// 문제
// 자연수 M과 N이 주어질 때 M이상 N이하의 자연수 중 소수인 것을 모두 골라 이들 소수의 합과 최솟값을 찾는 프로그램을 작성하시오.

// 예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 소수는 61, 67, 71, 73, 79, 83, 89, 97 총 8개가 있으므로, 이들 소수의 합은 620이고, 최솟값은 61이 된다.

// 입력
// 입력의 첫째 줄에 M이, 둘째 줄에 N이 주어진다.

// M과 N은 10,000이하의 자연수이며, M은 N보다 작거나 같다.

// 출력
// M이상 N이하의 자연수 중 소수인 것을 모두 찾아 첫째 줄에 그 합을, 둘째 줄에 그 중 최솟값을 출력한다.

// 단, M이상 N이하의 자연수 중 소수가 없을 경우는 첫째 줄에 -1을 출력한다.

// 예제 입력 1
// 60
// 100
// 예제 출력 1
// 620
// 61
// 예제 입력 2
// 64
// 65
// 예제 출력 2
// -1

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

//😢 기본 '소수 찾기'문제에서 조건을 조금 추가해주면 쉽게 해결되는 문제

// 😊 최솟값을 구해주기 위해 Array를, 소수값의 합을 구해주기 위해 sum 변수를 추가했다.
// 소수를 구하는 부분은 function으로 따로 빼주었으며,
// function내에서 소수를 찾으면 arr에 push함과 동시에 소수들을 sum에 누적해 줬다.
// 그리고 마지막에 만약 Array.length가 없다면 소수는 없는 것이므로 -1을 출력하도록 했다.
