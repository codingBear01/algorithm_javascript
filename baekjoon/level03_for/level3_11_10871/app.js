const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const numAB = input[0].split(" ").map((val) => +val);
const numA = numAB[0];
const numB = numAB[1];
const numArr = input[1].split(" ").map((val) => +val);

let ansArr = [];

solution(numA, numB, numArr);

function solution(N, X, A) {
  for (let i = 0; i < N; i++) {
    if (A[i] < X) {
      ansArr.push(A[i]);
    }
  }
  console.log(ansArr.join(" "));
}
