// 문제
// 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)

// 둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

// 출력
// X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.

// 예제 입력 1
// 10 5
// 1 10 4 9 2 3 8 5 7 6
// 예제 출력 1
// 1 4 2 3

// 일반
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = input[0].split(" ");

let N = +num[0];
let X = +num[1];
let A = input[1].split(" ");

let result = "";

for (let i = 0; i < N; i++) {
  if (+A[i] < X) {
    result = result + A[i] + " ";
  }
}

console.log(result);

// map & join & push

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = input[0].split(" ").map((x) => Number(x));
let arr = input[1].split(" ").map((x) => Number(x));
const answer = [];

for (let i = 0; i <= num[0]; i++) {
  if (num[1] > arr[i]) {
    answer.push(arr[i]);
  }
}

console.log(answer.join(" "));

// filter

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let max = Number(input[0].split(" ")[1]);
let arr = input[1].split(" ").map((x) => Number(x));

const answer = arr.filter((v) => max > v);

console.log(answer.join(" "));
