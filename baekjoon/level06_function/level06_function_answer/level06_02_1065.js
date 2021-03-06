// 문제
// 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.

// 출력
// 첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.

// 예제 입력 1
// 110
// 예제 출력 1
// 99
// 예제 입력 2
// 1
// 예제 출력 2
// 1
// 예제 입력 3
// 210
// 예제 출력 3
// 105
// 예제 입력 4
// 1000
// 예제 출력 4
// 144
// 예제 입력 5
// 500
// 예제 출력 5
// 119

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let num = Number(input);

function hansu(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let hundredNumber = Math.floor((i % 1000) / 100);
    let tenNumber = Math.floor((i % 100) / 10);
    let oneNumber = i % 10;

    if (i < 100) {
      // n이 한자리 수 혹은 두자리 수 일 때
      count++;
    } else if (100 <= i && i < 1000) {
      if (hundredNumber - tenNumber === tenNumber - oneNumber) {
        count++;
      }
    }
  }
  return count;
}
console.log(hansu(num));

// n은 1000보다 작거나 같은 자연수이다. 그런데 일단 1000은 한수가 아니므로 조건문에서 1000은 볼 필요도 없다.

// 1부터 n까지 중에 한수의 개수를 세야하므로 for문으로 하나씩 반복문을 돌며 한수인 조건에 부합하면 count를 하나씩 늘리면 된다.

// * n이 한자리 혹은 두자리 수 일 경우(1~99) : 이 경우는 따질 것도 없이 모든 수가 한수이다. 1 ~ 9 까지는 숫자가 하나밖에 없기 때문에 그냥 수가 하나밖에 없는 등차수열인 것이다. 10 ~ 99까지도 각 자리의 수가 등차수열에 부합한다.

// * n이 세자리 인 경우 (100 ~ 999) : 이 때에는 각 자리마다 숫자를 hundredNumber(백의 자리 숫자), tenNumber(십의 자리 숫자), oneNumber(일의 자리 숫자)로 구하여서 백의 자리 숫자 - 십의 자리 숫자 = 십의 자리 숫자 - 일의 자리 숫자 이면 count하면 된다.
