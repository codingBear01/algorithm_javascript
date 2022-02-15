/*# 문제61 : 문자열 압축하기

문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
*/

/*
입력
aaabbbbcdddd

출력
a3b4c1d4
*/

/*기능 요구사항
for문 돌다 첨 등장하는 값이면 arr에 잡아넣고
cnt++ 활용 문자열에서 각 문자가 몇 번 등장했는지 출력
 */

const input = "aaabbbbcdddd";
let count = 0;
let answer = "";
let inputInitial = input[0];
for (let i = 0; i <= input.length; i++) {
  if (input[i] === inputInitial) {
    count++;
  }
  if (input[i] !== inputInitial) {
    answer += inputInitial + count;
    count = 1;
    inputInitial = input[i];
  }
}
console.log(answer);

/*답안
const user_s = new String(prompt('문자열을 입력하세요'));
let result_s = "";
let store_s = user_s[0];
let count = 0;

for (let i of user_s) {
  //i = user_s[i]. i와 store_s가 일치하면 count +1
  if (i === store_s) {
    count += 1;
  } else {
    result_s += store_s + String(count);
    store_s = i;
    count = 1;
  }
}

result_s += store_s + String(count);
console.log(result_s);
 */
