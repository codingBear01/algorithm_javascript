// 문제
// 한수는 지금 (x, y)에 있다. 직사각형은 각 변이 좌표축에 평행하고, 왼쪽 아래 꼭짓점은 (0, 0), 오른쪽 위 꼭짓점은 (w, h)에 있다. 직사각형의 경계선까지 가는 거리의 최솟값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 x, y, w, h가 주어진다.

// 출력
// 첫째 줄에 문제의 정답을 출력한다.

// 제한
// 1 ≤ w, h ≤ 1,000
// 1 ≤ x ≤ w-1
// 1 ≤ y ≤ h-1
// x, y, w, h는 정수
// 예제 입력 1
// 6 2 10 3
// 예제 출력 1
// 1
// 예제 입력 2
// 1 1 5 5
// 예제 출력 2
// 1
// 예제 입력 3
// 653 375 1000 1000
// 예제 출력 3
// 347
// 예제 입력 4
// 161 181 762 375
// 예제 출력 4
// 161

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((val) => +val);

const [x, y, w, h] = input;
const xDiff = w - x;
const yDiff = h - y;

const arr = [xDiff, yDiff, x, y];
arr.sort((a, b) => {
  return a - b;
});

console.log(arr[0]);

// 문제를 쉽게 풀어서 설명한다면
// "직사각형 내부에 있는 점 (x,y)에서 직사각형의 변까지의 최소 거리" 를 구하는 문제이다.
// 결국 최솟값을 찾으면 되는 문제이다. 무엇중에 최소값을 구하는지만 생각하면 해결된다.
// 사각형이니까 변이 4개, 우리에게 주어진 점은 1개(x, y)
// 그렇다면 (x, y)에서 사각형 각 변까지의 거리 총 4개를 구하고 그중에 최솟값을 취하면 된다.
// 아래 코드는 4개의 거리값을 구하고, 정렬을 이용하여 최솟값을 구하는 코드이다.

// arrFunction
const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];
const counters = [x, y, w - x, h - y];

console.log(Math.min.apply(null, counters));
