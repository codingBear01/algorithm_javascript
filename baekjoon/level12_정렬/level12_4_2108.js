// 문제
// 수를 처리하는 것은 통계학에서 상당히 중요한 일이다. 통계학에서 N개의 수를 대표하는 기본 통계값에는 다음과 같은 것들이 있다. 단, N은 홀수라고 가정하자.

// 산술평균 : N개의 수들의 합을 N으로 나눈 값
// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
// 최빈값 : N개의 수들 중 가장 많이 나타나는 값
// 범위 : N개의 수들 중 최댓값과 최솟값의 차이
// N개의 수가 주어졌을 때, 네 가지 기본 통계값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 수의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 단, N은 홀수이다. 그 다음 N개의 줄에는 정수들이 주어진다. 입력되는 정수의 절댓값은 4,000을 넘지 않는다.

// 출력
// 첫째 줄에는 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.

// 둘째 줄에는 중앙값을 출력한다.

// 셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.

// 넷째 줄에는 범위를 출력한다.

// 예제 입력 1
// 5
// 1
// 3
// 8
// -2
// 2
// 예제 출력 1
// 2
// 2
// 1
// 10
// 예제 입력 2
// 1
// 4000
// 예제 출력 2
// 4000
// 4000
// 4000
// 0
// 예제 입력 3
// 5
// -1
// -2
// -3
// -1
// -2
// 예제 출력 3
// -2
// -2
// -1
// 2

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function sol(input) {
  let answer = "";
  const N = +input[0];
  const numbers = input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b);

  answer += `${Math.round(numbers.reduce((s, v) => s + v, 0) / N)}\n`;
  answer += `${numbers[Math.floor(N / 2)]}\n`;

  const map = new Map();
  let max = 1;
  for (let number of numbers) {
    if (map.has(number)) {
      max = Math.max(max, map.get(number) + 1);
      map.set(number, map.get(number) + 1);
    } else map.set(number, 1);
  }

  const maxArr = [];
  for (let [key, val] of map) {
    if (val === max) maxArr.push(key);
  }

  answer += maxArr.length === 1 ? `${maxArr[0]}\n` : `${maxArr[1]}\n`;
  answer += `${numbers[N - 1] - numbers[0]}\n`;
  return answer;
}
console.log(sol(input));

// let N = +input.shift();
// let arr = [];
// const numMap = {};

// // 배열에 숫자 담기
// for (let i = 0; i < N; i++) {
//   arr.push(+input[i]);
// }

// const sortedArr = arr.sort((a, b) => a - b);

// // 산술평균 구하기
// function avg(nums) {
//   let sum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return Math.round((sum / N).toFixed(1));
// }

// // 중앙값
// let middleNum = Math.floor(sortedArr.length / 2);

// //최빈값

// for (let num of sortedArr) {
//   if (numMap[num]) {
//     numMap[num] = numMap[num] + 1;
//   } else {
//     numMap[num] = 1;
//   }
// }

// let hitMaxNum = Math.max.apply(null, Object.values(numMap));
// let hitMaxNumArr = [];
// let hitMaxNumResult = 0;
// for (let numKey in numMap) {
//   if (numMap[numKey] === hitMaxNum) {
//     hitMaxNumArr.push(numKey);
//   }
// }

// if (hitMaxNumArr.length > 1) {
//   hitMaxNumArr = hitMaxNumArr.sort((a, b) => a - b);
//   hitMaxNumResult = hitMaxNumArr[1];
// } else {
//   hitMaxNumResult = hitMaxNumArr[0];
// }

// // 범위
// let min = sortedArr[0];
// let max = sortedArr[sortedArr.length - 1];
// let range = max - min;

// console.log(avg(sortedArr));
// console.log(sortedArr[middleNum]);
// console.log(+hitMaxNumResult);
// console.log(range);
