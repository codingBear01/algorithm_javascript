/*# 문제41 : 소수판별

숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
*/

/* 기능 요구사항
input % input 해서 true라면 YES 반환, false라면 NO 반환
*/

const input = prompt("소수인지 판별할 숫자를 입력하세요.");

solution(+input);

function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= n; ++i) {
    if (n % i === 0) {
      cnt++;
    }
  }
  if (cnt > 2) {
    console.log("소수가 아닙니다!");
  } else if (cnt === 2) {
    console.log("소수입니다!");
  }
}

/*답안
const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
  //1보다 크고 num보다 작은 수 중 나누어 떨어지는 수가 있다면? NO 소수
  for (let i = 2; i < num; i++) {
    const result = num % i;
    if (result === 0) {
      console.log("NO");
      //for문 돌다가 0이 나오면 for문에서 빠져나옴
      return false;
    }
  }
  //num이 1이라면 NO 소수
  if (num === 1) {
    console.log("NO");
    return;
  }
  //위의 식들을 다 통과하는 num이라면 "YES" 반환
  console.log("YES");
}
check_prime(num);
 */
