const { count } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  [n, ...person] = input;
  let cnt = [];

  for (let i = 0; i < n; i++) {
    let rank = 0;

    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      [aWeight, aTall] = person[i].split(" ");
      [bWeight, bTall] = person[j].split(" ");

      if (+aWeight < +bWeight && +aTall < +bTall) rank += 1;
    }
    cnt.push(rank + 1);
  }
  return cnt.join(" ");
}
console.log(solution(input));
