// 문제
// 어떤 자연수 N이 있을 때, 그 자연수 N의 분해합은 N과 N을 이루는 각 자리수의 합을 의미한다. 어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라 한다. 예를 들어, 245의 분해합은 256(=245+2+4+5)이 된다. 따라서 245는 256의 생성자가 된다. 물론, 어떤 자연수의 경우에는 생성자가 없을 수도 있다. 반대로, 생성자가 여러 개인 자연수도 있을 수 있다.

// 자연수 N이 주어졌을 때, N의 가장 작은 생성자를 구해내는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 자연수 N(1 ≤ N ≤ 1,000,000)이 주어진다.

// 출력
// 첫째 줄에 답을 출력한다. 생성자가 없는 경우에는 0을 출력한다.

// 예제 입력 1
// 216
// 예제 출력 1
// 198

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const number = parseInt(input, 10);
let result = 1;

for (let i = 1; i < number; i++) {
  result = i;

  const stringValue = i.toString();
  for (let j = 0; j < stringValue.length; j++) {
    result += parseInt(stringValue[j], 10);
  }

  if (result === number) {
    console.log(i);
    return;
  }
}

console.log(0);

// 문제 설명
// 해당 문제는 위에서 언급했듯 Brute Force를 이용한 문제이다. (https://www.acmicpc.net/problem/2231) 제의 조건은 다음과 같다.
// 분해합 N은 1 ≤ N ≤ 1,000,000으로 주어진다.
// N의 가장 작은 생성자를 출력한다.
// 생성자가 존재하지 않을 경우 0을 출력한다.
// Brute Force, 흔히 완전탐색으로 여겨지는 문제답게 1부터 N까지 루프를 순회하며 부분합을 구하고, 부분합이 N과 같은 숫자, 즉 생성자를 구하면 되는 문제이다.
// 루프를 1부터 순회하기 때문에 가장 먼저 N과 일치하는 부분합을 가진 숫자가 바로 문제에서 요구하는 N의 가장 작은 생성자가 된다.
// 풀이는 위에서 설명했던 그대로 굉장히 간단하다.
// 1부터 입력으로 주어진 N만큼 루프를 돌며, 해당 숫자의 부분합을 구하고, 부분합이 N과 일치한다면 해당 숫자가 N의 가장 작은 생성자가 된다.
