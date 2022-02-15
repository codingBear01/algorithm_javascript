/*# 문제58 : 콤마 찍기

원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

**숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.**
*/

/*
입력
123456789

출력
123,456,789
*/

/*답안
// 내장함수 사용
const n = +prompt("숫자를 입력해주세요.");
console.log(n.toLocaleString());

// 재귀함수 사용
function comma(s) {
  //종료조건: s.length가 3이하이면 s를 return
  if (s.length <= 3) {
    return s;
  } else {
    //종료조건 충족할 때까지 comma()의 parameter로 s.slice(0, s.length -3)을 입력
    return (
      comma(s.slice(0, s.length - 3)) + "," + s.slice(s.length - 3)
      //idx 0~5까지 숫자 잘라내고 "," 붙이고 idx 6부터 숫자 붙이기
    );
  }
}

const n = prompt("숫자를 입력해주세요.");
console.log(comma(n));

 */
