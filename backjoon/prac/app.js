// "/dev/stdin"

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split(" ")
  .map((val) => +val);
