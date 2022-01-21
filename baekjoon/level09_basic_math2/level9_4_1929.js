// 문제
// M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

// 출력
// 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

// 예제 입력 1
// 3 16
// 예제 출력 1
// 3
// 5
// 7
// 11
// 13

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

let a = input[0];
let b = input[1];
let arr = [];
let answer = "";
for (let i = 0; i <= b; i++) {
  arr.push(true);
}
arr[0] = false;
arr[1] = false;

console.log(arr);

for (let m = 2; m <= b; m++) {
  if (arr[m]) {
    for (let n = 2; n <= b / m; n++) {
      arr[m * n] = false;
    }
  }
}
for (let j = a; j <= b; j++) {
  if (arr[j]) answer += j + "\n";
}
console.log(answer.trim());

//2의 배수, 3의 배수...n의 배수인 값들을 제거해서 소수를 구하기 때문에, a의 값이 무엇이든 우선 0부터 b까지의 수만큼 배열 arr로 만들어 true로 넣어줍니다.

// 0과 1은 소수가 아니기 때문에 false로 바꿔줍니다.

// 이후, 2부터 b까지의 값을 돌면서 arr의 m번째 인덱스 값이 true라면, 그 수의 배수를 제거해주어야하기 때문에, for문을 돌립니다.

// 2*1, 3*1 을 제외하고 2*2, 3*2...등등의 수를 제거해야하기 때문에, n을 2에서부터, 16/2, 16/3까지만 돌아야하기 때문에, b/m값까지만 돌면서 arr의 값들을 제거해줍니다. (false로 변환)

// 그러면 2*2, 2*3....2*8까지의 배열, 3*2* 3*3, ...3*5의 값들을 false로 변환해줍니다.

// 그럼 arr를 a부터 b까지 돌면서 arr[j]가 true인 값들의 인덱스만 answer에 추가해준 뒤 반환해주면됩니다.
