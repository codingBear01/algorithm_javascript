/*# 문제84 : 숫자뽑기

소정이는 어떤 숫자에서 k개의 수를 뽑았을 때 가장 큰 수를 찾는 놀이를 하고 있습니다. 
예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23]을 만들 수 있습니다.
이 중 가장 큰 수는 **73**입니다.

위 예시처럼 **어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수**를 찾아 주세요.
*/

/*
입력

출력
*/

/*기능 요구사항
 */

const input = String(1723);
const arr = [];

for (let i = 0; i < input.length; ++i) {
  for (let j = 1 + i; j < input.length; ++j) {
    arr.push(input[i] + input[j]);
  }
}
const sortedArr = arr.sort((a, b) => {
  return a - b;
});

console.log(sortedArr[sortedArr.length - 1]);

/*답안
 */
