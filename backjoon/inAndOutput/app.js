// 472
// 385

const fs = require("fs");
const [A, B] = fs.readFileSync("./input.txt").toString().split("\n");
const [B0, B1, B2] = B.split("");

const result3 = A * B2;
const result4 = A * B1;
const result5 = A * B0;
const result6 = A * B;

console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
