// 문제
// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

// 입력
// 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

// 출력
// 주어진 수들 중 소수의 개수를 출력한다.

// 예제 입력 1
// 4
// 1 3 5 7
// 예제 출력 1
// 3

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input[1].split(" ").map((val) => +val);
let ans = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    continue;
  } else {
    let cnt = 0;

    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        cnt++;
      }
    }
    if (cnt === 0) {
      ans++;
    }
  }
}
console.log(ans);

// 만약 splited[i]의 값이 1이라면 continue를 해줍니다. 1은 소수가 아니기 때문입니다.

// 1이 아닌 이외의 값들 중에서 2에서 자기자신을 뺀 값까지 돌면서 만약 나누어지는 값이 있다면 count를 올릴 것이고, 해당 splited[i]를 돌고 나온 후, count가 0이라면, 1과 자기자신외에는 나누어지는 값이 없으므로, 해당 값은 소수로 answer의 카운트를 올려주면 됩니다.
