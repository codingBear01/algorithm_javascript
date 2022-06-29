/*# 문제49 : 최댓값 구하기

순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
*/

/*
입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10
*/

/* 기능 요구사항
sort 활용 idx맨끝값 구하기
max변수 + for문 + if문 활용
*/

let input = prompt("숫자를 공백으로 구분하여 입력하세요.")
  .split(" ")
  .map((val) => +val);

// input = input.sort((a, b) => {
//   return a - b;
// });
// console.log(input[input.length - 1]);

let max = 0;
for (let i = 0; i < input.length; ++i) {
  if (input[i] > max) {
    max = input[i];
  }
}
console.log(max);

/*답안
 */
