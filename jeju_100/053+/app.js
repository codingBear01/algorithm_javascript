/*# 문제53 : 괄호 문자열

괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 **바른 문자열**, 그렇지 않은 문자열을 **바르지 않은 문자열**이라 부르도록 하자. 

(())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
(해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

**입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**
*/

/*
입력
출력
*/

/* 기능 요구사항
 */

function mathBrackets(e) {
  let count = 0;

  //괄호 개수가 같지 않으면 false
  for (let i = 0; i < e.length; i++) {
    if (e[i] === "(") {
      count++;
    }
    if (e[i] === ")") {
      count--;
    }
  }
  if (count !== 0) {
    return false;
  }
  //괄호 개수가 같지만 형태가 틀릴 경우를 판별하는 식
  let 괄호 = [];
  for (let i in e) {
    if (e[i] === "(") {
      괄호.push("(");
    }

    if (e[i] === ")") {
      if (괄호.length === 0) {
        return false;
      }
      괄호.pop();
    }
  }
  return true;
}

const n = prompt("입력해주세요.").split("");
//mathBrackets 함수 실행 결과 true이면 YES, false면 NO 반환
if (mathBrackets(n) === true) {
  console.log("YES");
} else {
  console.log("NO");
}

/*답안
 */
