// "/dev/stdin"

let input = require("fs").readFileSync("./input.txt").toString();
num = +input;

let star = "";
let blank = "";

for (let i = 1; i <= num; i++) {
  star += "*";
  for (let j = 0; j < num - i; j++) {
    blank += " ";
  }
  console.log(blank + star);
  blank = "";
}
