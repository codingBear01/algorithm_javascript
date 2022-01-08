// "/dev/stdin"

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let i = 0;
let result = "";

while (i <= input.length - 1) {
  let a = +input[i].split(" ")[0];
  let b = +input[i].split(" ")[1];

  if (a != 0 || b != 0) {
    result += `${a + b}` + "\n";
  } else {
    break;
  }
  i++;
}

console.log(result);
