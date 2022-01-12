const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0].split(" ");

let arr1 = [];
let arr2 = [];

for (let i = 0; i < input.length; i++) {
  let reversedNum = input[i].split("").reverse();
  arr1.push(reversedNum);
  let newVal = arr1[i].join("");
  arr2.push(newVal);
}

let result = arr2[0] > arr2[1] ? arr2[0] : arr2[1];
console.log(result);
