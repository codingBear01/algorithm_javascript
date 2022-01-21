// 문제
// 베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.

// 이 명제는 조제프 베르트랑이 1845년에 추측했고, 파프누티 체비쇼프가 1850년에 증명했다.

// 예를 들어, 10보다 크고, 20보다 작거나 같은 소수는 4개가 있다. (11, 13, 17, 19) 또, 14보다 크고, 28보다 작거나 같은 소수는 3개가 있다. (17,19, 23)

// 자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오.

// 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 케이스는 n을 포함하는 한 줄로 이루어져 있다.

// 입력의 마지막에는 0이 주어진다.

// 출력
// 각 테스트 케이스에 대해서, n보다 크고, 2n보다 작거나 같은 소수의 개수를 출력한다.

// 제한
// 1 ≤ n ≤ 123,456
// 예제 입력 1
// 1
// 10
// 13
// 100
// 1000
// 10000
// 100000
// 0
// 예제 출력 1
// 1
// 4
// 3
// 21
// 135
// 1033
// 8392

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputs = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((val) => +val);

inputs.pop();

for (let i = 0; i < inputs.length; i++) {
  let input = Number(inputs[i]);
  let input2 = input * 2;

  let isPrimeNumber = Array(input2 + 1).fill(true);
  isPrimeNumber[0] = isPrimeNumber[1] = false;

  function PrimeNumber() {
    for (let i = 2; i <= Math.ceil(Math.sqrt(input2)); i++) {
      if (isPrimeNumber[i]) {
        let m = 2;
        while (i * m <= input2) {
          isPrimeNumber[i * m] = false;
          m++;
        }
      }
    }
    let results = [];

    for (let i = input + 1; i <= input2; i++) {
      if (isPrimeNumber[i]) {
        results.push(i);
      }
    }
    console.log(results.length);
  }

  PrimeNumber();
}

// 에라스토텔레스의 체를 이용한 소수구하기
// 1. 0 부터 최댓값인 M까지의 배열을 true로 채운다.
// 2. 0 과 1은 소수가 아니므로 false로 바꿔주고 남은 수 중 가장 작은수인 2의 배수들을 false로 바꿔준다. (시작점인 2는 그대로 true)
// 3. 2번이 끝나면 남아있는 수 중 그다음으로 작은수인 i를 찾아 더이상 반복할 수 없을 때까지 반복해준다.
// 이 경우에는 입력값이 여러개이기 때문에 반복문을 통해서 함수를 여러번 반복하여 실행해 주었고 입력값의 마지막 0은 필요가없기때문에 pop()으로 제거해주었다.
// 처음에 주어진 자연수 n이상 2n이하의 소수의 갯수를 구하는 것인줄 알았으나
// n초과 2n이하의 소수의 갯수를구하는 문제였다.
