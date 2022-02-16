/*# 문제66 : 블럭탑쌓기

탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
순서에 맞게 쌓지 않으면 무너질 수 있습니다.

예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
- B 다음 블럭이 C가 될 수 있습니다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

1. 블럭은 알파벳 대문자로 표기합니다.
2. 규칙에 없는 블럭이 사용될 수 있습니다.
3. 중복된 블럭은 존재하지 않습니다.
*/

/*
입력
탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
규칙 = "ABD"

출력
["가능", "불가능", "가능", "가능", "가능"]
*/

/*기능 요구사항
rule[1], rule[2]가 rule[0]보다 선행한다면 "불가능"
 */

// const tower = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
// const rule = "BAC";
// const output = [];

// for (let i = 0; i < tower.length; ++i) {
//   const splitedArr = tower[i].split("");
//   const sortedArr = splitedArr.sort();
//   const aIdx = tower[i].indexOf(rule[0], 0);
//   const bIdx = tower[i].indexOf(rule[1], 0);
//   const cIdx = tower[i].indexOf(rule[2], 0);

//   if (aIdx < bIdx && aIdx < cIdx) {
//     output.push("가능");
//   } else if (bIdx === -1 && aIdx < cIdx) {
//     output.push("가능");
//   } else if (cIdx === -1 && aIdx < bIdx) {
//     output.push("가능");
//   } else if (aIdx === -1 && bIdx < cIdx) {
//     output.push("가능");
//   } else if (aIdx + bIdx + cIdx === -3 && tower[i] === sortedArr.join("")) {
//     output.push("가능");
//   } else if (bIdx + cIdx === -2 && aIdx >= 0) {
//     output.push("가능");
//   } else {
//     output.push("불가능");
//   }
// }
// console.log(output);

//예외처리의 늪에 빠져 실패...ㅠ

/*답안
function solution(entire, rule) {
  let answer = [];
  for (let part of entire) {
    answer.push(blockOrderCheck(part, rule));
  }
  return answer;
}

function blockOrderCheck(part, rule) {
  //rule문자열에서 rule[0]의 idx num
  let temp = rule.indexOf(rule[0]);
  for (let str of part) {
    //part(= entire[i]) 에서 str(글자 하나씩) 탐색
    if (rule.includes(str)) {
      //rule문자열에 str가 들어 있다면?
      if (temp > rule.indexOf(str)) {
        //rule문자열에서 str의 idx num보다 temp가 크다면 "불가능" 반환
        return "불가능";
      }
      //temp를 rule.indexOf(str)로 치환
      temp = rule.indexOf(str);
    }
  }
  //모든 조건 충족 시 "가능" 반환
  return "가능";
}

const entire = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "AEBFDGCH"];
const rule = "ABD";

console.log(solution(entire, rule));
//["가능", "불가능", "가능", "가능", "불가능"]
 */
