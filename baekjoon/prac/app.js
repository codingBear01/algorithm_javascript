const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

for (let i = 0; i < N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  console.log(x, y);
}
// sdafsdafsdaf;
