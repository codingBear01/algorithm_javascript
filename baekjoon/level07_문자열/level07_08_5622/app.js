const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(str) {
  const word = str.split("");
  let secArr = [];
  for (let i = 0; i < str.length; i++) {
    if (word[i] === "A" || word[i] === "B" || word[i] === "C") {
      secArr.push(3);
    } else if (word[i] === "D" || word[i] === "E" || word[i] === "F") {
      secArr.push(4);
    } else if (word[i] === "G" || word[i] === "H" || word[i] === "I") {
      secArr.push(5);
    } else if (word[i] === "J" || word[i] === "K" || word[i] === "L") {
      secArr.push(6);
    } else if (word[i] === "M" || word[i] === "N" || word[i] === "O") {
      secArr.push(7);
    } else if (
      word[i] === "P" ||
      word[i] === "Q" ||
      word[i] === "R" ||
      word[i] === "S"
    ) {
      secArr.push(8);
    } else if (word[i] === "T" || word[i] === "U" || word[i] === "V") {
      secArr.push(9);
    } else if (
      word[i] === "W" ||
      word[i] === "X" ||
      word[i] === "Y" ||
      word[i] === "Z"
    ) {
      secArr.push(10);
    }
  }
  let sum = 0;
  for (let i = 0; i < secArr.length; i++) {
    sum += secArr[i];
  }
  console.log(sum);
}
