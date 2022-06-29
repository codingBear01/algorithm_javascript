/*# 문제59 : 빈칸채우기

총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.
*/

/*
입력
hi

출력
========================hi========================
*/

const input = prompt("문자를 입력하세요!");
const arr = new Array(51).join("=").split("");
const mid = Math.floor(arr.length / 2);
const deleteNum = input.length;
arr.splice(mid - Math.ceil(deleteNum / 2), deleteNum, input);
const result = arr.join("");
console.log(result);
console.log(result.length);

/*답안
const str = prompt("문자열을 입력해주세요.");

const n = 25 + parseInt(str.length / 2, 10);
//왼쪽부터 문자열 길이가 n이 될 때까지 "=" 채우기
const a = str.padStart(n, "=");
//문자열 길이 50까지 오른쪽도 "=" 채워서 출력
console.log(a.padEnd(50, "="));
 */
