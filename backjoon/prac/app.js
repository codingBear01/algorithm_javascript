// "/dev/stdin"

let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();

console.log(input.charCodeAt(0));
