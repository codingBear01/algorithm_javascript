const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

let N = A / (C - B);

let answer = Math.floor(N) + 1;

B >= C ? (answer = -1) : answer;

console.log(answer);

// BREAK-EVEN POINT = C * 판매대수 > (A + (B * 판매대수))
// 한 대 생산비 = 1000 + 70 * 1 = 1070
// 한 대 매출 = 170 * 1 = 170
// 판매대수를 for 돌려야 댐 ㅇㅅㅇ
// while? for?
