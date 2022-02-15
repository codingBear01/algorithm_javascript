/*# 문제42 : 2020년

2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

**제한 조건**
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/

/* 기능 요구사항
월 input 값은 1~12
일 input 값
- 2월은 1~29
- 1, 3, 5, 7, 8, 10, 12월 1~31
- 2, 4, 6, 9, 11월 1~30

나머지 활용?
ex) '20.1.1. = WED
and '20.1.8. = WED
즉 day % 7 = 1
이와 같은 원리로 day % 7 = 2 -> THU

근데 이렇게 12월까지 작성하면 넘 길어질 것 같은디...
공통된 증감 원리가 없을까...?
*/

// let month = +prompt("몇 월?");
// if (month < 1 || month > 12) {
//   alert("1~12 사이의 숫자를 입력하세요.");
//   let month = +prompt("몇 월?");

//   let day = +prompt("며칠?");
//   if ((month === 1 && day < 1) || (month === 1 && day > 31)) {
//     alert("1~31 사이의 숫자를 입력하세요.");
//     let day = +prompt("며칠?");

//     if (month === 1 && day % 7 === 1) {
//       console.log("WED");
//     }
//   }
// }
//답은 new Date()와 getDay() 내장함수를 쓰는 거시어따...ㅇㅅㅇ

/*답안
const month = prompt("월을 입력하세요.");
const date = prompt("일을 입력하세요.");

function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const x = new Date("2021-" + a + "-" + b);
  //Fri Jan 01 2021 00:00:00 GMT+0900 (한국 표준시)
  return day[x.getDay()];
  //해당 요일을 idx로 반환 ex) 일요일 = 0
}
console.log(solution(month, date));
 */
