const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(input);

function solution(num) {
  let reversedNumArr = [];

  for (let i = 0; i < num.length; i++) {
    for (let j = num[i].length - 1; j >= 0; j--) {
      reversedNumArr.push(num[i][j]);
    }
  }
  reversedNumArr = reversedNumArr.join("");
  let numA = +reversedNumArr.slice(0, 3);
  let numB = +reversedNumArr.slice(3);

  let result = numA > numB ? numA : numB;

  console.log(result);
}
