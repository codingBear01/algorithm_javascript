// "/dev/stdin"

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split(" ")
  .map((val) => +val);

let h = input[0];
let m = input[1];

let date = new Date(2022, 1, 7, h, m);

date.setMinutes(date.getMinutes() - 45);

console.log(date.getHours(), date.getMinutes());
