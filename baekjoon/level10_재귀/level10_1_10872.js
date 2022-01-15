// 문제
// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 정수 N(0 ≤ N ≤ 12)이 주어진다.

// 출력
// 첫째 줄에 N!을 출력한다.

// 예제 입력 1
// 10
// 예제 출력 1
// 3628800
// 예제 입력 2
// 0
// 예제 출력 2
// 1

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = +input;

function re(n) {
  if (n <= 1) {
    return 1;
  }

  return n * re(n - 1);
}

console.log(re(input));

// 여기서 사용된 for문 조건은 1부터 순회한다. 재귀함수의 경우는 100부터 순회한 다음 호출 스택에 쌓여 있는 값을 처리해 나가게 되는데 스택은 LIFO방식이기 때문에 이때 스택에 제일 마지막으로 반환된 1부터 100까지 순차적으로 더해서 값을 반환하게 된다. 곱하기 방식도 위와 같다.
