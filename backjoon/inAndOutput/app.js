// 1 2

const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split(" ");

let a = +input[0];
let b = +input[1];
console.log(a + b);
