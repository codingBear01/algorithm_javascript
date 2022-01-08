// "/dev/stdin"

let input = require("fs").readFileSync("./input.txt").toString().split("\n");

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
