const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const num = +input[0];

function solution(N) {
  for (let i = 1; i < 10; i++) {
    console.log(`${N} * ${i} = ${N * i} `);
  }
}

solution(num);
