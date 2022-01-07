// "/dev/stdin"

let input = require("fs").readFileSync("./input.txt").toString();

let star = "";

for (let i = 0; i < input; i++) {
  star += "*";
  console.log(star);
}
