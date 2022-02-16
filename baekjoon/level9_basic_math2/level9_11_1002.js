// 문제
// 조규현과 백승환은 터렛에 근무하는 직원이다. 하지만 워낙 존재감이 없어서 인구수는 차지하지 않는다. 다음은 조규현과 백승환의 사진이다.

// 이석원은 조규현과 백승환에게 상대편 마린(류재명)의 위치를 계산하라는 명령을 내렸다. 조규현과 백승환은 각각 자신의 터렛 위치에서 현재 적까지의 거리를 계산했다.

// 조규현의 좌표 (x1, y1)와 백승환의 좌표 (x2, y2)가 주어지고, 조규현이 계산한 류재명과의 거리 r1과 백승환이 계산한 류재명과의 거리 r2가 주어졌을 때, 류재명이 있을 수 있는 좌표의 수를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 다음과 같이 이루어져 있다.

// 한 줄에 x1, y1, r1, x2, y2, r2가 주어진다. x1, y1, x2, y2는 -10,000보다 크거나 같고, 10,000보다 작거나 같은 정수이고, r1, r2는 10,000보다 작거나 같은 자연수이다.

// 출력
// 각 테스트 케이스마다 류재명이 있을 수 있는 위치의 수를 출력한다. 만약 류재명이 있을 수 있는 위치의 개수가 무한대일 경우에는 -1을 출력한다.

// 예제 입력 1
// 3
// 0 0 13 40 0 37
// 0 0 3 0 7 4
// 1 1 1 1 1 5
// 예제 출력 1
// 2
// 1
// 0

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input.shift());

for (let i = 0; i < T; i++) {
  const xyrxyr = input[i].split(" ").map((num) => parseInt(num));
  const x1 = xyrxyr.shift();
  const y1 = xyrxyr.shift();
  let r1 = xyrxyr.shift();
  const x2 = xyrxyr.shift();
  const y2 = xyrxyr.shift();
  let r2 = xyrxyr.shift();

  const dx = x1 - x2;
  const dy = y1 - y2;
  if (r1 > r2) {
    // r1 <= r2로 정의
    const temp = r1;
    r1 = r2;
    r2 = temp;
  }
  const rSum = (r1 + r2) * (r1 + r2);
  const rSub = (r2 - r1) * (r2 - r1);
  const d = dx * dx + dy * dy; // 중점 사이의 거리

  // 1. 원이 두 점에서 만나는 경우 (두 점)(r2 - r1 < d < r1 + r2)
  if (d < rSum && d > rSub) {
    console.log(2);
    // 2. 두 원이 외접하는 경우 (한 점)( d = r1 + r2)
    // 3. 두 원이 내접하는 경우 (한 점)( d = r2 - r1 && d != 0)
  } else if (d === rSum || (d === rSub && d !== 0)) {
    console.log(1);
    // 4. 하나의 원이 다른 원을 포함하는 경우 (못 만남)( d < r2 - r1 )
    // 5. 두 원이 멀리 떨어져 만나지 않는 경우 (못 만남)( d > r1 + r2 )
  } else if (d < rSub || d > rSum) {
    console.log(0);
    // 6. 두 원이 일치하는 경우 (무수히)( d = 0, r1 = r2 )
  } else if (d === 0) {
    if (r1 === r2) {
      console.log(-1);
    } else {
      console.log(0);
    }
  }
}