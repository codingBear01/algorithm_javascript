const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input.shift());
let arr = input[0].split(" ").map((x) => +x);

let set = new Set(arr);
let uniq = [...set].sort((a, b) => a - b);

let dic = {};
uniq.forEach((e, index) => {
  dic[e] = index;
});

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += dic[arr[i]] + " ";
}

console.log(answer);
