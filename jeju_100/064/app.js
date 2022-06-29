/*# 문제64 : 이상한 엘레베이터

정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

**입력**
정량 N이 입력됩니다.

**출력**
가장 적게 옮길 수 있는 횟수를 출력합니다.
만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.
*/

/*
입력
24
출력
4
*/

/*기능 요구사항
나누기랑 나머지 활용해야 할듯?
계산을 몇 번 했는지 횟수 필요함
나머지가 0이 되는 경우의 수?
 */

const N = Number(prompt("정량을 입력하세요!"));
const A = 7;
const B = 3;
let cnt = 0;

if (N % 7 === 0) {
  console.log(N / 7);
} else if ((N % 7) % 3 === 0) {
  console.log(Math.floor(N / 7) + (N % 7) / 3);
} else {
  console.log(-1);
}

/*답안
let N = parseInt(prompt("정량을 입력하세요"), 10);
let result = 0;

while (true) {
  if (N % 7 === 0) {
    result += parseInt(N / 7, 10);
    console.log(result);
    break;
  }
  N -= 3;
  result += 1;
  if (N < 0) {
    console.log(-1);
    break;
  }
}

const input = 27;
const elevator = (input) => {
  let answer = 0;
  answer += Math.floor(input / 7);
  input = input % 7;
  if (input % 3 !== 0) {
    answer = -1;
    return answer;
  }
  answer += Math.floor(input / 3);
  return answer;
};
console.log(elevator(input));
 */
