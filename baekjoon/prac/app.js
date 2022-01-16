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
