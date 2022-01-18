// 문제
// 수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.

// Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다.

// X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

// 입력
// 첫째 줄에 N이 주어진다.

// 둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.

// 출력
// 첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.

// 제한
// 1 ≤ N ≤ 1,000,000
// -109 ≤ Xi ≤ 109
// 예제 입력 1
// 5
// 2 4 -10 4 -9
// 예제 출력 1
// 2 3 0 3 1
// 예제 입력 2
// 6
// 1000 999 1000 999 1000 999
// 예제 출력 2
// 1 0 1 0 1 0

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

// 문제를 풀이하자면
// 1. set으로 중복제거 후 sort로 정렬
// 2. 정렬한 배열의 각 요소를 key로 인덱스 값을 value로 하는 딕셔너리 생성
// 3. arr배열의 요소를 key값으로 가지고 있는 dic의 value값을 answer에 추가
